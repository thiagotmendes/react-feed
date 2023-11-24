import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { JSXElementConstructor, ReactElement, ReactFragment, useState } from "react";

type PostProps = {
  author: { avatarUrl: string, name: string, role: string };
  publishedAt: Date;
  content: [type: string, content: string]
}

export function Post(props: PostProps) {
  const { author, publishedAt, content } = props;

  const [comments, setComment] = useState(
    ["Um post inicial"]
  )

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormat = format(publishedAt, "d 'de' LLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment() {
    setComment([...comments, newCommentText])
    setNewCommentText('')
    event?.preventDefault()
  }

  function handleNewCommentChange() {
    event?.target.setCustomValidity('')
    setNewCommentText(event?.target.value)
  }

  function handleNewCommentInvalid() {
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter( comment => {
      return comment !== commentToDelete
    } )
    setComment(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map( (line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong className="">
          Deixe seu comentário
        </strong>
        <textarea 
          name="comment" 
          placeholder="Deixe um comentário" 
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty} > Comentar </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment 
                key={comment} 
                comment={comment} 
                onDeleteComment={deleteComment} 
              />
            )
          })
        }
      </div>
    </article>
  )
}
