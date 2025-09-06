import React from 'react'

type Todo = {
  id: number
  text: string
  done: boolean
}

const initialTodos: Todo[] = [
  {
    id: 1,
    text: 'Learn TypeScript',
    done: false,
  },
  {
    id: 2,
    text: 'Builde Ecommerce App',
    done: false,
  },
  { id: 3, text: 'Use typescript with react', done: false },
]

type Action = {}

const TodosContext = createContext<typeof initialTodos | null>(null)
const TodosDispatchContext = createContext<React.Dispatch<Action>>(() => null)
