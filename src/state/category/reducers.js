import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [
      { label: 'Personal', value: 'personal' },
      { label: 'Work', value: 'work' },
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
