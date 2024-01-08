import React, { memo } from 'react'

function Todos({todo}) {
console.log("child render");
  return (
    <>
    <h1>My Todos</h1>
    {
        todo.map(
            (todo,index) => {return <p key={index}>{todo}</p>}
        )
    }
    </>
  );
}

export default memo(Todos);