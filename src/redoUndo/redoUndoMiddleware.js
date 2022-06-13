
import { todoFilterActionss } from "./filterActions";

const actionCreator = (redoType, undoType) => ({
  redo: { type: redoType },
  undo: { type: undoType },
});

const manager = {
  actions: [],
  cursor: -1,
  redo() {
    if (this.actions.length && this.cursor >= 0) {
      this.cursor--;
      return this.actions[this.cursor].undo;
    } 
  },
  undo() {
    if (this.actions.length && this.cursor < this.actions.length - 1) {
      this.cursor++;
      return this.actions[this.cursor].redo;
    } 
  },
  add(action) {
    const namespace = action.type.split('/')[0];    
    switch (namespace) {
      case 'todo':          
        this.actions.unshift(actionCreator('todo/TODO_REDO', 'todo/TODO_UNDO'));
        break;
      case 'notTodo': 
        this.actions.unshift(actionCreator('notTodo/TODO_REDO', 'notTodo/TODO_UNDO'));    
        break;
      default:
    }
  },  
}

const redoUndoMiddleware = store => next => action => {  
  manager.add(action);
  
  if (todoFilterActionss.includes(action.type)) {
    return next(action);
  } else if (action.type === 'REDO') {
    return next(manager.redo() || action); 
  } else if (action.type === 'UNDO') {
    return next(manager.undo() || action);
  } else {
    return next(action);
  }  
};

export default redoUndoMiddleware;