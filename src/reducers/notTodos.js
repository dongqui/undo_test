import undoable from 'redux-undo'


const notTodos = (state = [], action) => {
  switch (action.type) {
    case 'notTodo/ADD_NOT_TODO':
      return [...state, {
          id: action.id,
          text: action.text,
          completed: false
        }]        

    case 'notTodo/TOGGLE_TODO':
      return state.map(todo => ({
          id: action.id,
          text: action.text,
          completed: todo.id === action.id
        }))
    default:
      return state
  }
}

export default undoable(notTodos, {
  undoType: 'notTodo/TODO_REDO',
  redoType: 'notTodo/TODO_UNDO',  
});
