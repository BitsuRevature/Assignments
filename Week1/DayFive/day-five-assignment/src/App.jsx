import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Posts />
    </div>
  )
}

export default App
