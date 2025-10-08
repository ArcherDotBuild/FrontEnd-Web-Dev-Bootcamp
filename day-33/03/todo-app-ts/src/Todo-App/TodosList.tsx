import { useContext } from 'react'
import {
  Todo,
  TodoAppCtx,
  TodoDispatchCtx,
  TodosAppContext,
  TodosDispatchContext,
} from './TodoApp'

export default function TodoList() {
  console.log('TodoList being created.')

  const todosAppContext: TodoAppCtx = useContext(TodosAppContext) as TodoAppCtx
  const todosDispatchContext: TodoDispatchCtx = useContext(
    TodosDispatchContext
  ) as TodoDispatchCtx

  function onDoneChange(e: React.ChangeEvent, todo: Todo) {
    todo.done = (e.target as HTMLInputElement).checked
    todosDispatchContext.dispatch({ type: 'update', todo })
  }

  function onDeleteClick(e: React.MouseEvent, todo: Todo) {
    todosDispatchContext.dispatch({ type: 'delete', todo })
  }

  return (
    <>
      <ul className='todo-list'>
        {todosAppContext.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type='checkbox'
                name={`${todo.id}-todo`}
                id={`${todo.id}-todo`}
                checked={todo.done}
                onChange={(e) => onDoneChange(e, todo)}
              />
              <label htmlFor={`${todo.id}-todo`}>{todo.text}</label>
              <button onClick={(e) => onDeleteClick(e, todo)}>X</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

// 1.26m