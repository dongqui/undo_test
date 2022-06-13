import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddNotTodo from '../containers/AddNotTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <AddTodo />
    <AddNotTodo/>
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
)

export default App
