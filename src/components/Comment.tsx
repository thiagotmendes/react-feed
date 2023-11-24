import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({comment, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagotmendes.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane (você)</strong>
              <time title="23 de fevereiro de 2023" dateTime="2023-02-25 12:08:00">Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p className="">
            {comment}
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
