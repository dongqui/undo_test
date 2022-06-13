import 'babel-polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'
import redoUndoMiddleware from './redoUndo/redoUndoMiddleware'

const store = createStore(todoApp, applyMiddleware(redoUndoMiddleware));

const rootElement = document.getElementById('root')
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
