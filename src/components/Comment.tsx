import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { useState } from "react"

interface CommentProps {
  comment: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({comment, onDeleteComment}: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount( likeCount + 1 );
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
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} /> Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
