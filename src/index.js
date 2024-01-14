import React from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from '@features/Layout'
import { Provider } from '@components/Route'
import { Route } from '@components/Route'
import { Create } from '@pages/Create/'
import { Login } from '@pages/Login/'
import { Settings } from '@pages/Settings/'
import { Home } from '@pages/Home/'

import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <Layout className="layout">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
    </Layout>
  </Provider>
)
