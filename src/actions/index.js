let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'todo/ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const addNotTodo = (text) => {
  return {
    type: 'notTodo/ADD_NOT_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'todo/TOGGLE_TODO',
    id
  }
}

export const toggleNotTodo = (id) => {
  return {
    type: 'notTodo/TOGGLE_TODO',
    id
  }
}

export const addTrippleTodo = (text) => {
  return {
    type: 'todo/ADD_TRIPPLE_TODO',
    id: nextTodoId++,
    text,
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
