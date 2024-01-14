import React from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
// import Tasker from '@features/Tasker'
import { Layout } from '@pages/Layout'
import { store } from '@state/store'
import { Form } from '@components/Form'

import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Layout>
    <Form />
  </Layout>
)
