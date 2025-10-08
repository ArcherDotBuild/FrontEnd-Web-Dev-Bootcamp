import { useContext, useState } from 'react'
import {
  TodoAppCtx,
  TodoDispatchCtx,
  TodosAppContext,
  TodosDispatchContext,
} from './TodoApp'

export default function AddTodo() {
  console.log('AddTodo being created.')

  const [text, setText] = useState<string>('')

  const todosAppContext: TodoAppCtx = useContext(TodosAppContext) as TodoAppCtx
  const todosDispatchContext: TodoDispatchCtx = useContext(
    TodosDispatchContext
  ) as TodoDispatchCtx

  function onAddClick() {
    onTodoAdd(text)
  }

  function onNewTodoChange(e: React.ChangeEvent) {
    setText((e.target as HTMLInputElement).value)
  }

  function onTodoAdd(text: string) {
    const newId = todosAppContext.lastTodoId + 1
    todosDispatchContext.dispatch({
      type: 'add',
      todo: { id: newId, text, done: false },
    })
  }

  return (
    <>
      <div className='todo-add-container'>
        <input
          type='text'
          name='newTodo'
          id='newTodo'
          value={text}
          onChange={onNewTodoChange}
        />
        <button onClick={onAddClick}>Add</button>
      </div>
    </>
  )
}
