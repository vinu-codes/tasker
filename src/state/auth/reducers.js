import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, fireStore } from '@services/firebase'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'

const initialState = {
  uid: null,
  loading: false,
  error: null,
}

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (
    { email, password },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      // The user is signed in
      const user = userCredential.user

      // You can execute any function here after successful sign-in
      console.log('User signed in:', user.uid)
      return fulfillWithValue(user.uid)
    } catch (error) {
      // Handle errors here
      console.error('Sign-in error:', error.message)
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true
    })
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.loading = false
      state.uid = payload
      state.error = null
    })
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.loading = false
      state.user = null
      state.error = payload
    })
  },
})

export default authSlice.reducer
