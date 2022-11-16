import React from 'react'

export function TodoItem({id, description, isDone, onToggle}) {
    const className = isDone ? " done" : "";
    return (
    <li key={id} id={id} className={"item"+className} onClick={()=>{onToggle(id)}}>{description}</li>
  )
}
