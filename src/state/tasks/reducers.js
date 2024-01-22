import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    activeId: 'abc',
    items: [
      {
        label: 'Animate items when selected',
        date: '2024-01-05',
        details: 'Circle should show up when edit button is clicked',
        category: 'coding',
        active: false,
        status: 'incomplete',
        id: 'abc',
      },
      {
        label: 'Add status prop when creating items ',
        date: '2024-01-05',
        details: '',
        category: 'coding',
        active: false,
        status: 'incomplete',
        id: 'def',
      },
      {
        label: 'Create fake async thunks',
        date: '2024-01-05',
        details: 'include promises',
        category: 'coding',
        active: false,
        status: 'incomplete',
        id: 'ghi',
      },
      {
        label: 'Add in ids for each item being created',
        date: '2024-01-05',
        details: '',
        category: 'coding',
        active: false,
        status: 'incomplete',
        id: 'jkl',
      },
    ],
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload)
    },
    updateItems: (state, { payload }) => {
      state.items = payload
    },
    deleteItem: (state, action) => {
      state.items = action.payload
    },
    setActiveId: (state, { payload }) => {
      state.activeId = payload
    },
  },
})

export const { updateItems, addItem, deleteItem, setActiveId } =
  tasksSlice.actions
export default tasksSlice.reducer
