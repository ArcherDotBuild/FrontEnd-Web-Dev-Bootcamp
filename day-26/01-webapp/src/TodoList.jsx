import React from 'react'

const TodoList = ({ todos, onTodoChange, onTodoDelete }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onTodoChange} onDelete={onTodoDelete} />
        </li>
      ))}
    </ul>
  )
}

function Todo({ todo, onChange, onDelete }) {
  return (
    <>
      <input
        type='checkbox'
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked })
        }}
        onDelete={(e) => {
          onDelete({ id: e.target.id })
        }}
      />
      {todo.text}
    </>
  )
}

export default TodoList
