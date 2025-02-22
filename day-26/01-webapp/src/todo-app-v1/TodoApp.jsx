import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

// 60
let nextId = 4
// todos array contains objects, each representing a "to-do" item. Each item has an id field, which is unique
const initialTodos = [
  { id: 1, text: 'Learn JavaScript', done: true },
  { id: 2, text: 'Build Spotify Clone using JavaScript', done: false },
  { id: 3, text: 'Learn React', done: false },
]

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos)
  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text,
        done: false,
      },
    ])
  }

  // updatedTodo is an object representing a to-do item that needs to
  // replace the existing one in the todos array, based on its id
  function handleTodoChange(updatedTodo) {
    setTodos(
      todos.map((existingTodo) => {
        // If the IDs match, it means the current to-do (existingTodo)
        // is the one to be updated. It replaces it with the updatedTodo
        if (existingTodo.id === updatedTodo.id) {
          return updatedTodo
        } else {
          return existingTodo
        }
      })
    )
  }

  function handleTodoDelete(todoId) {
    // creating a new array that excludes the to-do with the specified todoId
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  return (
    <>
      <h2>Todos</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onTodoChange={handleTodoChange}
        onTodoDelete={handleTodoDelete}
      />
    </>
  )
}

export default TodoApp
