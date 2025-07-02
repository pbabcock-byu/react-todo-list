import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoFrom } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
 

// in the useState we are going to pass it a function to call the localstorage
 const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
  if (localValue == null) return
  return JSON.parse(localValue)
 })

 //every time the [todos] it will run this function
 // we want to store everything in the local storeage so when we refresh it keeps the data
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

 // setNewItem("")

 function addTodo(title) {
  setTodos(currentTodos => { 
    return [ 
    ...currentTodos,
    { id: crypto.randomUUID(), title, complete: false },
    ]
  })
 }

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed}
      }
      return todo
    })
  })
}


function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

 return (
  <>
    <NewTodoFrom onSubmit={addTodo}  />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
 )
}


