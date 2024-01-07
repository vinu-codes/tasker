import { createSelector } from '@reduxjs/toolkit'

const selectAuthState = (state) => state.auth

const items = createSelector(selectAuthState, (slice) => slice.items)

export const authSelector = {
  items,
}
