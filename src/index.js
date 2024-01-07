import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Tasker from '@features/Tasker'
import { store } from '@state/store'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Tasker />
  </Provider>
)
