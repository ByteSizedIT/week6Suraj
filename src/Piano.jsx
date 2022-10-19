import Key from "./component/Key"

const NOTES = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5'];

const Piano = () => (
  <div className="piano">
    {NOTES.map((note, index) => (
      <Key key={`key-${index}`} note={note} />
    ))}
  </div>
)
export default Piano
