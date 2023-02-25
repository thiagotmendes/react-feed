import styles from "./Sidebar.module.css"
import { PencilLine } from 'phosphor-react'
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg" alt="" className={styles.cover} />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/thiagotmendes.png" />
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
