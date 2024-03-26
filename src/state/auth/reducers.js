import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth, fireStore } from '@services/firebase'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'
import { saveState } from '@utils/localStorage'

const initialState = {
  uid: null,
  loading: false,
  error: null,
  loggedOut: false,
  auth: null,
  info: '',
}

export const getPersistence = createAsyncThunk(
  'auth/getPersistence',
  async ({ email, password }, { rejectWithValue, fulfillWithValue }) => {
    try {
      await setPersistence(auth, browserSessionPersistence)
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      // try {
      //   await signInWithEmailAndPassword(auth, email, password)
      //   return fulfillWithValue('Session persistence set and signed in')
      // } catch (error) {
      //   console.error('Sign-in error:', error.message)
      //   return rejectWithValue(error.message)
      // }
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      return rejectWithValue(errorMessage)
    }
  }
)

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (
    { email, password },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      await setPersistence(auth, browserSessionPersistence)
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
        saveState({ uid: user.uid })
        return fulfillWithValue(user.uid)
      } catch (error) {
        // Handle errors here
        console.error('Sign-in error:', error.message)
        return rejectWithValue(error.message)
      }
    } catch (error) {
      const errorMessage = error.message
      return rejectWithValue('persist error:', errorMessage)
    }
  }
)

export const signInAndSetUp = createAsyncThunk(
  'auth/signInAndSetUp',
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
      const userRef = doc(fireStore, 'users', user.uid)
      try {
        await setDoc(userRef, { items: [], categories: [] })
        // if (userCredential && userCredential.user)
        //   dispatch(setAuthPersistence())
        return fulfillWithValue(user.uid)
      } catch (error) {
        console.error('Error setting up user:', error.message)
        return rejectWithValue(error.message)
      }
    } catch (error) {
      // Handle errors here
      console.error('Sign-in error:', error.message)
      return rejectWithValue(error.message)
    }
  }
)

export const signUpUser = createAsyncThunk(
  'auth/signUp',
  async (
    { email, password },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      if (userCredential && userCredential.user) {
        dispatch(signInAndSetUp({ email, password }))
        return fulfillWithValue(userCredential.user.uid)
      } else {
        return rejectWithValue('Error creating user')
      }
    } catch (error) {
      console.error('Sign-in error:', error.message)
      return rejectWithValue(error.message)
    }
  }
)

export const persistUid = createAsyncThunk(
  'auth/persistUid',
  async (uid, { rejectWithValue, fulfillWithValue, dispatch }) => {
    return fulfillWithValue(uid)
  }
)

export const signOutUser = createAsyncThunk(
  'auth/signOutUser',
  async (_, { rejectWithValue, fulfillWithValue, dispatch }) => {
    try {
      await signOut(auth)
      return null
    } catch (error) {
      console.error('Sign-out error:', error.message)
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
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.uid = payload
      state.error = null
    })
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.loading = false
      state.user = null
      state.error = payload
    })
    builder.addCase(signOutUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(signOutUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.uid = null
    })
    builder.addCase(signOutUser.rejected, (state, { payload }) => {
      state.loading = false
      state.user = null
      state.error = payload
    })
    builder.addCase(signInAndSetUp.pending, (state) => {
      state.loading = true
    })
    builder.addCase(signInAndSetUp.fulfilled, (state, { payload }) => {
      state.loading = false
      state.uid = payload
      state.error = null
    })
    builder.addCase(signInAndSetUp.rejected, (state, { payload }) => {
      state.loading = false
      state.user = null
      state.error = payload
    })
    builder.addCase(getPersistence.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPersistence.fulfilled, (state, { payload }) => {
      state.loading = false
      state.info = payload
      state.error = null
    })
    builder.addCase(getPersistence.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(persistUid.pending, (state) => {
      state.loading = true
    })
    builder.addCase(persistUid.fulfilled, (state, { payload }) => {
      state.loading = false
      state.uid = payload
      state.error = null
    })
    builder.addCase(persistUid.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  },
})

export default authSlice.reducer
