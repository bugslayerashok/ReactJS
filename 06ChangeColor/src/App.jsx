import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")
  const obj = {
    backgroundColor:color,
    width:"100%",
    height:"100vh"
  }

  return (
    <>
      <div style={obj}>
      </div>
      <div className="container">
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("blue")}>blue</button>
        <button onClick={()=>setColor("green")}>green</button>
        <button onClick={()=>setColor("yellow")}>yellow</button>
      </div>
    </>
  )
}

export default App
