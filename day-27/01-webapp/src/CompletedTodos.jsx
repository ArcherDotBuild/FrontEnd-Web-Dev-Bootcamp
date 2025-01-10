import React from 'react'
import { useTodos } from './TodosContext'

const CompletedTodos = () => {
  const todos = useTodos()
  // It checks if todos is defined and not null or undefined before attempting to access its length property.
  // If todos is null or undefined, the expression short-circuits and returns undefined without throwing an error.
  const completedTodos = todos?.length
    ? todos.filter((todo) => todo.done)
    : null
  return (
    <section>
      <h1>Completed Todos</h1>
      {completedTodos?.length
      ? completedTodos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type='checkbox'
              name={`${todo.id}-done`}
              id={`${todo.id}-done`}
              checked={todo.done}
              readOnly
            />
            {todo.text}
          </div>
        )
      })
      : <p>No todos completed</p>
    }
    </section>
  )
}

export default CompletedTodos
