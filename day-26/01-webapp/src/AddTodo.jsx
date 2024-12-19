import React from 'react'

const AddTodo = () => {
  const [text, setText] = useState()
  return (
    <>
      <input
        type='text'
        name='newTodo'
        id='newTodo'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(text)
          setText('')
        }}
      >
        Add
      </button>
    </>
  )
}

export default AddTodo
