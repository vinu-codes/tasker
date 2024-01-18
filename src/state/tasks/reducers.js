import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    selectedItems: [],
    items: [
      {
        label: 'Clean house',
        date: '2024-01-05',
        details: 'Try to do today',
        category: 'personal',
      },
      {
        label: 'Gardening',
        date: '2024-01-05',
        details: 'Call gardener',
        category: 'personal',
      },
      {
        label: 'Desk work',
        date: '2024-01-05',
        details: 'coding',
        category: 'work',
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
    // deleteItem: (state, action) => {
    //   state.items = action.payload
    // },
  },
})

export const { setFavItem, setActiveItem, addItem, deleteItem } =
  tasksSlice.actions
export default tasksSlice.reducer
