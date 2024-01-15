import { createSelector } from '@reduxjs/toolkit'

const selectCategorySlice = (state) => state.category

const categories = createSelector(
  selectCategorySlice,
  (slice) => slice.categories
)

export const categorySelector = {
  categories,
}
