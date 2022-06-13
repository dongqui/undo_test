import undoable, { excludeAction } from 'redux-undo'
import { todoFilterActionss } from '../redoUndo/filterActions'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'todo/ADD_TODO':
      return [...state, {
          id: action.id,
          text: action.text,
          completed: false
        }]        
    case 'todo/ADD_TRIPPLE_TODO':
      return [...state, {
          id: action.id,
          text: action.text,
          completed: false
        },
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]        
    case 'todo/TOGGLE_TODO':
      return state.map(todo => ({
          id: action.id,
          text: action.text,
          completed: todo.id === action.id
        }))
    default:
      return state
  }
}

export default undoable(todos, {
  undoType: 'todo/TODO_REDO',
  redoType: 'todo/TODO_UNDO',
  filter: excludeAction(todoFilterActionss)
});
