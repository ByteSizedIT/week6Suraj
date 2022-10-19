import Key from "./Key"
import { useEffect, useState } from "react";
import { NOTES, keyMap } from "./constants"

const Piano = () => {
  const [selectedNote, setSelectedNote] = useState("");

  function handleKeyDown(event) {
    setSelectedNote(keyMap[event.key])
    const noteAudio = new Audio()
    noteAudio.src = `assets/Notes/${selectedNote}.mp3`
    noteAudio.play()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedNote])

  return <div className="piano" >
    {/* <audio src={`assets/Notes/${selectedNote}.mp3`}></audio> */}
    {NOTES.map((note, index) => (
      <Key key={`key-${index}`} note={note} selectedNote={selectedNote}/>
    ))}
  </div>
}

export default Piano
