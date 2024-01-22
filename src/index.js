import React from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from '@features/Layout'
import { Provider as RouteProvider } from '@components/Route'
import { Route } from '@components/Route'
import { Create } from '@pages/Create/'
import { Login } from '@pages/Login/'
import { Settings } from '@pages/Settings/'
import { Home } from '@pages/Home/'
import { Edit } from '@pages/Edit'
import { store } from '@state/store'
import { Provider } from 'react-redux'

import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouteProvider>
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
        <Route path="/edit">
          <Edit />
        </Route>
      </Layout>
    </RouteProvider>
  </Provider>
)
