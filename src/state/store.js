import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import tasksReducer from './tasks/reducers'
import categoryReducer from './category/reducers'

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export { store }
