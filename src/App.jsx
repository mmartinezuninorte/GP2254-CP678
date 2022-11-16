import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {TodoList} from './components/TodoList'
import { TodoForm } from './components/TodoForm'

const vectorInicial = [
  {id:1, description:"Practicar React", isDone:true},
  {id:2, description:"Repasar material", isDone:false},
  {id:3, description:"Profundizar", isDone:false},
  {id:4, description:"Terminar CP", isDone:false}
]
              

function App() {

  const [todos, setTodos] = useState(vectorInicial)

  //Metodo realiza inversion del valor isDone para un elemento
  // del vector con un id especifico
  const updateTodo=(id)=>{
    // Creamos un vector copia llamado newTodos para trabajar en el
    const newTodos = [...todos];    
    // Buscar entre los elementos de ese vector el indice del id que coincida 
    //con el parametro                  
    const todoToToggle = newTodos.findIndex((todo)=> todo.id==id)
    // Invertir el valor de isDone para ese elemento en concreto
    newTodos[todoToToggle].isDone= !newTodos[todoToToggle].isDone
    // Actualizamos Todos con los valores actualizados
    setTodos(newTodos)
    // Vuelve a renderizar todos los elementos donde se represente mi
    // vector todos
  }

  // handler para el envio de informacion desde TodoForm
  const handleSubmitForm=(todo)=>{
    // Creamos un nuevo objeto, con la estructura que veniamos manejando
    const newTodo={
      // at me permite trabajar con un elemento basandome en su index
      // permite valores negativos para buscar de atras hacia adelante
      // en este caso -1 como el ultimo elemento
      id: todos.at(-1).id+1,
      description: todo,
      isDone: false,
    };
      // añadimos a todos el elemento creado con anterioridad
     setTodos((prevTodos)=>[...prevTodos,newTodo])
  }

  
  return (
    <>
      <h1>Lista de pendientes</h1>
      <TodoList todos={todos} onToggle={updateTodo}/>
      <br />
      <br />
      <TodoForm onSubmitComponent={handleSubmitForm}/>
    </>
  )
}

export default App
