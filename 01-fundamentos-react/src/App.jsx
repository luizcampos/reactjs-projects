import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post author="Luiz Fellipe" content="Olá, prazer!" />
      <Post author="Beyoncé Knowles" content="Heey, baby!" />
    </div>
  )
}
