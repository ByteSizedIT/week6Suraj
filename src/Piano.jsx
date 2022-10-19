import Key from "./Key"

const NOTES = [
  "c4",
  "df4",
  "d4",
  "ef4",
  "e4",
  "f4",
  "gf4",
  "g4",
  "af4",
  "a4",
  "bf4",
  "b4"
]

const Piano = () => (
  <div className="piano">
    {NOTES.map((note, index) => (
      <Key key={`key-${index}`} note={note} />
    ))}
  </div>
)
export default Piano
