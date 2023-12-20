import React from 'react'
import { createRoot } from 'react-dom/client'
import Tasker from '@features/Tasker'
import { Provider } from 'react-redux'
import store from './store'
import { Christmas } from '@features/Christmas'

const root = createRoot(document.getElementById('root'))
root.render(
  <div>
    <Provider store={store}>
      {/* <Tasker /> */}
      <Christmas />
    </Provider>
  </div>
)
