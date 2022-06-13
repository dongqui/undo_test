import { combineReducers } from 'redux'
import todos from './todos'
import notTodos from './notTodos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  notTodos,
  visibilityFilter
})

export default todoApp
