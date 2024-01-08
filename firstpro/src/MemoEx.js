import React, { useState } from 'react'
import Todos from './Todos'

function MemoEx() {
    let [counter,setCounter] = useState(0);
    let [todos,setTodos] = useState(['TODO1','TODO2']);
  return (
    <>
        <Todos todo={todos} />
        <button onClick={()=>setCounter(pre => pre+1)}>OK CLICK : {counter}</button>
    </>
  )
}

export default MemoEx