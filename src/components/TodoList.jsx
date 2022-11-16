import React from 'react'
import { TodoItem } from './TodoItem'

export  function TodoList({onToggle, todos=[]}) {
  return (
    <>
    <p>Pendientes:</p>
    <br />
    <ul>
        {todos?.map(({id, description, isDone})=>{
            return(<TodoItem 
                key={id} 
                id={id} 
                description={description} 
                isDone={isDone}
                onToggle={onToggle} />)
})}
    </ul>
    </>
  )
}
