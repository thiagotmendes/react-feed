import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

type PostProps = {
  author: Array<String>;
  publishedAt: Date;
  content: Array<String>
}

export function Post(props: PostProps) {
  const { author, publishedAt, content } = props;

  const [comments, setComment] = useState(
    [1, 2, 3]
  )

  const publishedDateFormat = format(publishedAt, "d 'de' LLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment() {
    setComment([...comments, comments.length + 1])
    console.log(comments)
    event?.preventDefault()
  }

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
        {
          content.map(line => {
            if (line.type == "paragraph") {
              return <p>{line.content}</p>
            } else if (line.type === "link") {
              return <p><a>{line.content}</a></p>
            }
          })
        }
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare </p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong className="">
          Deixe seu comentário
        </strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit"> Comentar </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return <Comment />
          })
        }
      </div>
    </article>
  )
}
