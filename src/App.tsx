import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar'

import './global.css'
import styles from './App.module.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main className="">
          <Post
            author="Thiago Mendes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia dignissimos alias nostrum tempora ratione illo nam saepe earum totam ipsam possimus, commodi dolores itaque provident dolorum molestiae quod nesciunt."
          />
          <Post
            author="Abel Braga"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia dignissimos alias nostrum tempora ratione illo nam saepe earum totam ipsam possimus, commodi dolores itaque provident dolorum molestiae quod nesciunt."
          />
        </main>
      </div>
    </div>

  )
}

