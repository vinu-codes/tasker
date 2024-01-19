import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        label: 'Clean house',
        date: '2024-01-05',
        details: 'Try to do today',
        category: 'personal',
        active: false,
      },
      {
        label: 'Gardening',
        date: '2024-01-05',
        details: 'Call gardener',
        category: 'personal',
        active: false,
      },
      {
        label: 'Desk work',
        date: '2024-01-05',
        details: 'coding',
        category: 'work',
        active: false,
      },
    ],
  },
  reducers: {
    // setFavItem: (state, action) => {
    //   state.items = action.payload
    // },
    // setActiveItem: (state, action) => {
    //   state.items = action.payload
    // },
    addItem: (state, { payload }) => {
      state.items.push(payload)
    },
    updateItems: (state, { payload }) => {
      state.items = payload
    },
    deleteItem: (state, action) => {
      state.items = action.payload
    },
    updateItems: (state, { payload }) => {
      state.items = payload
    },
  },
})

export const { updateItems, addItem, deleteItem } = tasksSlice.actions
export default tasksSlice.reducer
