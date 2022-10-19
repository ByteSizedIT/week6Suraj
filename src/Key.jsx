const Key = ({ note }) => {
  return <div className={note.match(/.f/) ? "key flat" : "key"}></div>
}

export default Key
