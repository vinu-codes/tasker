import React from 'react'
import ReactDOM from 'react-dom/client'
import Tasker from './features/Tasker'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Provider store={store}>
      <Tasker />
    </Provider>
  </div>
)
