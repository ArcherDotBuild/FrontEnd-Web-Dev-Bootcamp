import react, { createContext, useReducer, useState } from 'react'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

export type Todo = { id: number; text: string; done: boolean }

export type TodoAppCtx = { todos: Todo[]; lastTodoId: number }
export type TodoDispatchCtx = { dispatch: React.Dispatch<TodoAction> }

export type Action = 'add' | 'delete' | 'update'
export type TodoAction = { type: Action; todo: Todo }

const stockTodos: Todo[] = [
  {
    id: 1,
    text: 'Wake up early at 5am.',
    done: true,
  },
  {
    id: 2,
    text: 'Learn JavaScript between 7:30am - 10am',
    done: true,
  },
  {
    id: 3,
    text: 'Break for 30 mins',
    done: true,
  },
  {
    id: 4,
    text: 'Learn HTML/CSS between 10:30am -1230',
    done: true,
  },
]

let lastTodoId = stockTodos.slice(stockTodos.length - 1)[0].id

function todosReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'add':
      const newTodo = {
        id: action.todo.id,
        text: action.todo.text,
        done: false,
      }
      lastTodoId = action.todo.id
      return [...state, newTodo]
    case 'delete':
      const todosFiltered = state.filter((i) => i.id != action.todo.id)
      return todosFiltered
    case 'update':
      return state.map((existingTodo: Todo) => {
        if (existingTodo.id === action.todo.id) {
          return action.todo
        } else {
          return existingTodo
        }
      })
  }
}

export const TodosAppContext = createContext<TodoAppCtx | null>(null)
export const TodosDispatchContext = createContext<TodoDispatchCtx | null>(null)

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, stockTodos)

  return (
    <>
      <TodosAppContext.Provider value={{ todos, lastTodoId }}>
        <TodosDispatchContext.Provider value={{ dispatch }}>
          <section>
            <h2>Todo App</h2>
            <AddTodo />
            <section>
              <TodoList />
            </section>
          </section>
        </TodosDispatchContext.Provider>
      </TodosAppContext.Provider>
    </>
  )
}