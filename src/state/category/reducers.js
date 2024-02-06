import { createSlice } from '@reduxjs/toolkit'
import { colors } from '@common/Theme'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [
      {
        label: 'personal',
        active: false,
        value: 'personal',
        color: colors.lightGreen,
      },
      { label: 'work', active: false, value: 'work', color: colors.aqua },
      {
        label: 'coding',
        active: false,
        value: 'coding',
        color: colors.lightPink,
      },
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
