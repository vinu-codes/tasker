import { createSelector } from '@reduxjs/toolkit'

const selectTaskSlice = (state) => state.tasks

const items = createSelector(selectTaskSlice, (slice) => slice.items)
const activeId = createSelector(selectTaskSlice, (slice) => slice.activeId)

export const tasksSelector = {
  items,
  activeId,
}
