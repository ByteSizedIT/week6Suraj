import FlatKey from "./FlatKey"
import Key from "./Key"

export default function Octave({ octave }) {
  return (
    <>
      <Key note={`C${octave}`} />
      <FlatKey note={`Db${octave}`} />
      <Key note={`D${octave}`} />
      <FlatKey note={`Eb${octave}`} />
      <Key note={`E${octave}`} />
      <Key note={`F${octave}`} />
      <FlatKey note={`Gb${octave}`} />
      <Key note={`G${octave}`} />
      <FlatKey note={`Ab${octave}`} />
      <Key note={`A${octave}`} />
      <FlatKey note={`Bb${octave}`} />
      <Key note={`B${octave}`} />
    </>
  )
}
