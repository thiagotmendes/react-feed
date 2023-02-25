import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/thiagotmendes.png" alt="" className={styles.avatar} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane (você)</strong>
                            <time title="23 de fevereiro de 2023" dateTime="2023-02-25 12:08:00">Publicado há 1h</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className="">
                        Muito bom Devon, parabéns!! 👏👏
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