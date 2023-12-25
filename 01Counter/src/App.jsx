import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const addCounter = () => {
    if (counter<20) 
      setCounter(counter + 1);
  };
  const removeCounter = () => {
    if(counter>0)
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hii First Project</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addCounter}>Add : {counter}</button>
      &nbsp;&nbsp;&nbsp;<button onClick={removeCounter}>Remove (Dec) : {counter}</button>
    </>
  )
}

export default App
