import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'
import { auth, fireStore } from '@services/firebase'
import { updateCategory } from '@state/category'
import { colors } from '@common/Theme'

export const getCategoryData = createAsyncThunk(
  'tasks/getCategoryData',
  async (uid, { rejectWithValue, fulfillWithValue }) => {
    try {
      // get the doc reference for the user
      const userDocumentRef = doc(fireStore, 'users', uid)
      // get the snapshot of the user document
      const docSnapshot = await getDoc(userDocumentRef)

      if (docSnapshot.exists()) {
        // get the data from the snapshot
        const data = docSnapshot.data()
        // get the items [{}, {}] from the data
        return fulfillWithValue(data.categories)
      }
    } catch (error) {
      console.log('error getting user data', error)
      return rejectWithValue(error.message)
    }
  }
)

export const updateCategoryThunk = createAsyncThunk(
  'tasks/updateCategoryThunk',
  async (
    { uid, categories },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      // get the doc reference for the user
      const userDocumentRef = doc(fireStore, 'users', uid)
      const docSnapshot = await getDoc(userDocumentRef)

      if (docSnapshot.exists()) {
        console.log('doc exists for user')

        await updateDoc(userDocumentRef, {
          categories,
        })
        // dispatch(updateCategory(categories))
        return fulfillWithValue(categories)
      } else {
        rejectWithValue('error updating user doc')
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [
      // {
      //   label: 'personal',
      //   active: false,
      //   value: 'personal',
      //   color: colors.lightGreen,
      // },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getCategoryData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.categories = [...state.categories, ...payload]
      state.error = null
    })
    builder.addCase(getCategoryData.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(updateCategoryThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateCategoryThunk.fulfilled, (state, { payload }) => {
      state.loading = false
      state.categories = payload
      state.error = null
    })
    builder.addCase(updateCategoryThunk.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  },
})

export default categorySlice.reducer
