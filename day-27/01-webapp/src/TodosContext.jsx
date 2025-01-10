import React, { createContext, useContext, useReducer } from 'react'
import todosReducer from './todosReducer'

// todos array contains objects, each representing a "to-do" item. Each item has an id field, which is unique
const initialTodos = [
  { id: 1, text: 'Learn JavaScript', done: true },
  { id: 2, text: 'Build Spotify Clone using JavaScript', done: false },
  { id: 3, text: 'Learn React', done: false },
]

// Provides the context thoughout the app
const TodosContext = createContext(null)
const TodosDispatchContext = createContext(null)

const TodosProvider = ({children}) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos)
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
       {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

// Custom hooks to use the context
export const useTodos = () => useContext(TodosContext)
export const useDispatch = () => useContext(TodosDispatchContext)

export default TodosProvider