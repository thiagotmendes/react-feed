import styles from "./Post.module.css"
import { Comment } from "./Comment"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/thiagotmendes.png" alt="" className={styles.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Mendes</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title="23 de fevereiro de 2023" dateTime="2023-02-25 12:08:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 jane.design/doctorcare </p>
                <p><a href="">#novoprojeto #nlw #rocketseat </a></p>
            </div>

                <form className={styles.commentForm}>
                    <strong className="">
                        Deixe seu comentário
                    </strong>
                    <textarea placeholder="Deixe um comentário" />

                    <footer>
                        <button type="submit"> Comentar </button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        </article>
    )
}   