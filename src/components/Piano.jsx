import Key from "./Key"
import { useEffect, useState } from "react"
import { NOTES, keyMap } from "./constants"

const Piano = ({ setScore }) => {
  const [selectedNote, setSelectedNote] = useState("")

  function handleKeyDown(event) {
    for (let key in keyMap) {
      if (event.key === key) {
        setSelectedNote(keyMap[event.key])
        setScore((currentScore) => currentScore + 1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(playAudio, [selectedNote])

  function playAudio() {
    if (!selectedNote) return

    const noteAudio = new Audio()
    noteAudio.src = `assets/Notes/${selectedNote}.mp3`
    noteAudio.play()
  }

  return (
    <div className="piano">
      {/* <audio src={`assets/Notes/${selectedNote}.mp3`}></audio> */}
      {NOTES.map((note, index) => (
        <Key key={`key-${index}`} note={note} selectedNote={selectedNote} />
      ))}
    </div>
  )
}

export default Piano
