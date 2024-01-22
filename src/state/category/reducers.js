import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [
      { label: 'personal', active: false, value: 'personal' },
      { label: 'work', active: false, value: 'work' },
      { label: 'coding', active: false, value: 'coding' },
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
