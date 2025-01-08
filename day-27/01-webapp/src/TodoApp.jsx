import React, { createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import todosReducer from './todosReducer'

// todos array contains objects, each representing a "to-do" item. Each item has an id field, which is unique
const initialTodos = [
  { id: 1, text: 'Learn JavaScript', done: true },
  { id: 2, text: 'Build Spotify Clone using JavaScript', done: false },
  { id: 3, text: 'Learn React', done: false },
]

export const TodosContext = createContext(null)
export const TodosDispatchContext = createContext(null)

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos)

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        <h2>Todos</h2>
        <AddTodo />
        <TodoList />
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodoApp
