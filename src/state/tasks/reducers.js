import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    activeId: null,
    items: [
      // {
      //   label: 'Animate items when selected',
      //   date: '2024-01-05',
      //   details: 'Circle should show up when edit button is clicked',
      //   category: 'coding',
      //   active: false,
      //   status: 'incomplete',
      //   id: 'abc',
      // },
      // {
      //   label: 'Create fake async thunks',
      //   date: '2024-01-05',
      //   details: 'include promises',
      //   category: 'personal',
      //   active: false,
      //   status: 'incomplete',
      //   id: 'ghi',
      // },
      // {
      //   label: 'Create Completed Form Section',
      //   date: '2024-01-05',
      //   details: 'include Accordion',
      //   category: 'coding',
      //   active: false,
      //   status: 'incomplete',
      //   id: 'jkl',
      // },
      // {
      //   label: 'Testing 1',
      //   date: '2024-01-05',
      //   details: 'include Accordion',
      //   category: 'coding',
      //   active: false,
      //   status: 'completed',
      //   id: 'mno',
      // },
      // {
      //   label: 'Test Completed',
      //   date: '2024-01-05',
      //   details: 'testing',
      //   category: 'coding',
      //   active: false,
      //   status: 'completed',
      //   id: 'pqr',
      // },
    ],
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.items = payload
    },
    updateItems: (state, { payload }) => {
      state.items = payload
    },
    deleteItem: (state, { payload }) => {
      state.items = payload
    },
    setActiveId: (state, { payload }) => {
      state.activeId = payload
    },
  },
})

export const { updateItems, addItem, deleteItem, setActiveId } =
  tasksSlice.actions
export default tasksSlice.reducer
