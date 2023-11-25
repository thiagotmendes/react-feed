import { useState } from 'react'
import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thiagotmendes.png",
      name: "Thiago Mendes",
      role: "developer"
    },
    content: [
      { type: "paragraph", content: "fala galeraa" },
      { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2023-02-25 12:08:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/thiagotmendes.png",
      name: "Thiago Mendes",
      role: "developer"
    },
    content: [
      { type: "paragraph", content: "fala galeraa" },
      { type: "paragraph", content: 'Este será um novo post' },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2023-02-25 12:08:00')
  },
]

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
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }

        </main>
      </div>
    </div>

  )
}

