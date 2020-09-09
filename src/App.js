import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let initialClr = 'purple'
  const [bg , setBg] = useState(initialClr)
  const [text , setText] = useState("CLICK ME")

  const bgChange = () => {
    let clrChanged = "#34495e";
    setBg(clrChanged);
    setText("Ouchhh!! 🐈 ")
  }

  const bgBack = () => {
    setBg(initialClr)
    setText("AYYOO !!! 😠")
  }

  return (
     <>
     <div  style={{backgroundColor: bg}}>
      <button onClick={bgChange} onDoubleClick={bgBack}> {text} </button>
     </div>
     </>
  );
}

export default App;
