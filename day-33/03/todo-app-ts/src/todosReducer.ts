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

    case 'change': {
      const { todo } = action
      return state.map(t => t.id === todo.id ? todo : t)
    }
  }
}

// 1.16