import * as React from 'react'

const API_URL = process.env.REACT_APP_API_URL

const Todo = () => {
  const [todos, setTodos] = React.useState()

  React.useEffect(() => {
    fetch(`${API_URL}/todos`)
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