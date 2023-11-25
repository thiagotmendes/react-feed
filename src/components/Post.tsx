import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, JSXElementConstructor, ReactElement, useState } from "react";

interface Content {
  type: 'paragraph' | 'link'; 
  content: string
}

export interface PostType {
  id: number;
  author: { avatarUrl: string, name: string, role: string };
  publishedAt: Date;
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
 
  const [comments, setComment] = useState(
    ["Um post inicial"]
  )

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormat = format(post.publishedAt, "d 'de' LLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    setComment([...comments, newCommentText])
    setNewCommentText('')
    event?.preventDefault()
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity('')
    setNewCommentText(event?.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
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
          <Avatar hasBorder src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map( (line) => {
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
