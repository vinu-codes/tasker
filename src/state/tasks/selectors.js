import { createSelector } from '@reduxjs/toolkit'

const selectTaskSlice = (state) => state.tasks

const items = createSelector(selectTaskSlice, (slice) => slice.items)
const selectedItems = createSelector(
  selectTaskSlice,
  (slice) => slice.selectedItems
)

export const tasksSelector = {
  items,
  selectedItems,
}
