import { useState } from 'react'
import './App.css'
import BlackKey from './BlackKeys'
import WhiteKey from "./WhiteKey";

// Keys 1
const notes = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'];

// Keys 2
const notes2 = ['C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5'];

function App() {
  return (

    <div>
      <BlackKey />
      <WhiteKey />
    </div>
  );

}

export default App;
