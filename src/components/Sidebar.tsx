import styles from "./Sidebar.module.css"
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg" alt="" className={styles.cover} />
            <div className={styles.profile}>
                <img src="https://github.com/thiagotmendes.png" alt="" className={styles.avatar} />
                <strong> Thiago Mendes </strong>
                <span>Developer</span>
            </div>
            <footer>
                <a href="" className="">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}