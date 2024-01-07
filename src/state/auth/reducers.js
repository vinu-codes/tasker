import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    items: [],
  },
  reducers: {
    setFavItem: (state, action) => {
      state.items = action.payload
    },
    setActiveItem: (state, action) => {
      state.items = action.payload
    },
    addItem: (state, action) => {
      state.items = action.payload
    },
    deleteItem: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { setFavItem, setActiveItem, addItem, deleteItem } =
  authSlice.actions
export default authSlice.reducer
