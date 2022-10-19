import "./App.css"
import Piano from "./components/Piano.jsx"
import { useState } from "react"

function App() {
  const [score, setScore] = useState(0)

  return (
    <div>
      <h1>Keys Pressed {score} Times</h1>
      <Piano setScore={setScore} />
    </div>
  )
}

export default App
