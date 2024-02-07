import { createSelector } from '@reduxjs/toolkit'

const selectAuthState = (state) => state.auth

const uid = createSelector(selectAuthState, (slice) => slice.uid)

export const authSelector = {
  uid,
}
