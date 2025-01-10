import React, { useContext } from 'react'
import { TodosContext, TodosDispatchContext } from './TodoApp'

const TodoList = () => {
  const todos = useContext(TodosContext)
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  )
}

function Todo({ todo }) {
  const dispatch = useContext(TodosDispatchContext)
  return (
    <>
      <input
        type='checkbox'
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: 'change',
            todo: { ...todo, done: e.target.checked },
          })
        }}
      />
      {todo.text}
      <button
        onClick={() => {
          dispatch({
            type: 'remove',
            id: todo.id,
          })
        }}
      >
        X
      </button>
    </>
  )
}

export default TodoList
