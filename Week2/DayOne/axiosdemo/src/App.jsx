import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './component/PostLilst'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostList />
    </>
  )
}

export default App
