import React from 'react'
import { createRoot } from 'react-dom/client'
import Tasker from '@features/Tasker'
import { Provider } from 'react-redux'
import store from './store'
import './styles.css'
// import { Christmas } from '@features/Christmas'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Tasker />
  </Provider>
)
