import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/51478460?v=4',
      name: 'Gabriel Raimondi',
      role: 'Delphi Dev'
    },
    publishedAt: new Date('2023-01-20 18:47:00'),
    content: [
      { type: 'paragraph', content: 'Fala galera! 👋' },
      { type: 'paragraph', content: 'Acabei de atualizar meu GitHub com meus ultimos projetos! Segue link abaixo: ' },
      { type: 'link', content: 'https://github.com/GabrielRaimondi' }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/292270924_1726332861032752_1840355928138291264_n.jpg?ccb=11-4&oh=01_AdT5ImduOrPIp8UQixYluJgoc1xCHHhvu6F_FTZs0_8M1A&oe=63DFFE48',
      name: 'Carol Petri',
      role: 'Receptor'
    },
    publishedAt: new Date('2023-01-23 19:10:00'),
    content: [
      { type: 'paragraph', content: 'E aí galerinha do barulho!' },
      { type: 'paragraph', content: 'Sou viciada em Wow, mas não tenho amigos :(' },
      { type: 'paragraph', content: 'Segue abaixo o link para jogar comigo: ' },
      { type: 'link', content: 'https://link.exemplo/blablabla' }
    ]
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
