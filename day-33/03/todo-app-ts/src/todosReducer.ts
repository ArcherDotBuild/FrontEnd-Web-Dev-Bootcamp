import { Todo } from './TodosProvider'

export type Action = {
  type: 'add'
  id: number
  text: string
} | { type: 'change', todo: Todo}

export default function todosReducer(state: Todo[], action: Action): Todo[] {
  const { type } = action
  switch(type) {
    case 'add': { 
      const { id, text } = action
      return [...state, {id, text, done: false}]
    }

 case 'change':
  const updatedTodo = action.todo
  return state.map((existingTodo) => {
    if (existingTodo.id === updatedTodo.id) {
      return updatedTodo
    } else {
      return existingTodo
    }
  })
  }
}

// 1.16mins