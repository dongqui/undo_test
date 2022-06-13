import React from 'react'
import { connect } from 'react-redux'
import { addNotTodo } from '../actions'

let AddNotTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addNotTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Not Todo
        </button>
      </form>
    </div>
  )
}
AddNotTodo = connect()(AddNotTodo)

export default AddNotTodo
