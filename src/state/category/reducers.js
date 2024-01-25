import { createSlice } from '@reduxjs/toolkit'
import { colors } from '@common/Theme'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [
      { label: 'personal', active: false, value: 'personal', color: 'red' },
      { label: 'work', active: false, value: 'work', color: 'blue' },
      { label: 'coding', active: false, value: 'coding', color: 'green' },
    ],
  },
  reducers: {
    addCategory: (state, { payload }) => {
      state.categories.push(payload)
    },
    deleteCategory: (state, { payload }) => {
      state.categories = payload
    },
  },
})

export const { addCategory, deleteCategory } = categorySlice.actions
export default categorySlice.reducer
