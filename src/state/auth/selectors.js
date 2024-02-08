import { createSelector } from '@reduxjs/toolkit'

const selectAuthState = (state) => state.auth

const uid = createSelector(selectAuthState, (slice) => slice.uid)
const error = createSelector(selectAuthState, (slice) => slice.error)
const loading = createSelector(selectAuthState, (slice) => slice.loading)

export const authSelector = {
  uid,
  error,
  loading,
}
