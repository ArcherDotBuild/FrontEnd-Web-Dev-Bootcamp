import React from 'react'
import AddTodo from './AddTodo'

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos)
  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        todo: text,
        done: false,
      },
    ])
  }
  return (
    <>
      <h2>Todos</h2>
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  )

  let nextId = 4

  const initialTodos = [
    { id: 1, todo: 'Learn JavaScript', done: true },
    { id: 1, todo: 'Build Spotify Clone using JavaScript', done: true },
    { id: 1, todo: 'Learn React', done: false },
  ]
}

export default TodoApp
