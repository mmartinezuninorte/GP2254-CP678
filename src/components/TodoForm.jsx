import React from 'react'
import {useState} from 'react'


const VALIDATION = /^([a-záéíóúñA-ZÁÉÍÓÚÑ0-9 )]*)$/

export  function TodoForm({onSubmitComponent}) {
    const[{ todo, todoError }, setTodoField] = useState({todo: "",todoError:""})
    
    const todoChangeHandler = (e)=>{
        let newError ="";
        const matchReg = VALIDATION.test(e.target.value)
        if (!matchReg){
            newError="Caracteres Invalidos"
        }

        setTodoField({todo: e.target.value, todoError:newError})
    }

    const handleSubmit=(e)=>{
        // prevenir el envio por defecto mediante action
        // para dejarnos la logica de submit a nosotros
        e.preventDefault()

        // comprobaciones diversas
        if(todoError.length>0){
            setTodoField(({todo, todoError})=>
            {return {todo, todoError:""}})
            alert("Ingreso no valido")
            return;
        }

        if (todo.length===0){
            setTodoField(({todo, todoError})=>
            {return {todo, todoError:"Descripcion Vacia"}})
            return;
        }

        //Por ultimo enviamos todo que seria la descripcion a App.jsx
        // mediante onSubmitComponent
        onSubmitComponent(todo)
        
        //limpiamos valores de todo y todoError
        setTodoField({todo:"", todoError:""})        
    }

    return (
    <form onSubmit={handleSubmit}>
        <h3>Nuevo Pendiente</h3>
        <input 
        type="text"
        id="input-todo"
        name="input-todo"
        autoComplete='off' 
        placeholder='descripcion'
        value={todo}
        onChange={todoChangeHandler}/>
        <p>{todoError}</p>
        <br />
        <br />              
        <button disabled={todoError.length !== 0}>Añadir pendiente</button>
    </form>
  )
}
