import { createSelector } from '@reduxjs/toolkit'

const selectTaskSlice = (state) => state.tasks

const items = createSelector(selectTaskSlice, (slice) => slice.items)

export const tasksSelector = {
  items,
}
