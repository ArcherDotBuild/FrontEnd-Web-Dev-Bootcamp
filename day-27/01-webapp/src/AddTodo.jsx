import React, { useContext, useState } from 'react'
import { TodosDispatchContext } from './TodoApp'

let nextId = 4
const AddTodo = () => {
  const dispatch = useContext(TodosDispatchContext)
  const [text, setText] = useState('')
      
  return (
    <div className='add-todo-container'>
      <input
        type='text'
        name='newTodo'
        id='newTodo'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add', id: nextId++, text })
          setText('')
        }}
      >
        Add
      </button>
    </div>
  )
}

export default AddTodo
