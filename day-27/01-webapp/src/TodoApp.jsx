import React, { createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodosProvider from './TodosContext'
import CompletedTodos from './CompletedTodos'


const TodoApp = () => {
  
  return (
    <TodosProvider>
      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
      <CompletedTodos />
    </TodosProvider>
  )
}

export default TodoApp
