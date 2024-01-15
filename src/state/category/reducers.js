import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {},
})

export const { setFavItem, setActiveItem, addItem, deleteItem } =
  categorySlice.actions
export default categorySlice.reducer
