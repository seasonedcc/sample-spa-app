import * as React from 'react'
import { getBaseURL } from './App'

const Todo = () => {
  const [todos, setTodos] = React.useState()

  React.useEffect(() => {
    fetch(`${getBaseURL()}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, [])  

  return (
    <>
    <div>Todo list</div>
    {todos?.map((todo) => (
      <div key={todo.id}>
        <h5>{todo.name}</h5>
      </div>
    ))}
    </>

  )
}

export default Todo