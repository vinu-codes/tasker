import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'
import { auth, fireStore } from '@services/firebase'
import { updateCategory } from '@state/category'

const initialState = {
  activeId: '',
  items: [
    {
      label: 'Message Mauro on LinkedIn',
      id: '1',
      category: 'personal',
      status: 'incomplete',
      details: '',
      date: '',
    },
    {
      label: 'Message Natasha on LinkedIn',
      id: '1',
      category: 'personal',
      status: 'incomplete',
      details: '',
      date: '',
    },
    {
      label: 'Update Resume with Aima',
      id: '1',
      category: 'personal',
      status: 'incomplete',
      details: '',
      date: '',
    },
    {
      label: 'Apply for jobs for job seeker',
      id: '1',
      category: 'personal',
      status: 'incomplete',
      details: '',
      date: '',
    },
    {
      label: 'Cold call recruiters',
      id: '1',
      category: 'personal',
      status: 'incomplete',
      details: '',
      date: '',
    },
  ],
}

// updating firebase with new items
export const updateItemThunk = createAsyncThunk(
  'tasks/updateItemThunk',
  async ({ uid, items }, { rejectWithValue, fulfillWithValue, dispatch }) => {
    try {
      // get the doc reference for the user
      const userDocumentRef = doc(fireStore, 'users', uid)
      const docSnapshot = await getDoc(userDocumentRef)

      if (docSnapshot.exists()) {
        console.log('doc exists for user')

        await updateDoc(userDocumentRef, {
          items,
        })
        // dispatch(updateCategory(categories))
        return fulfillWithValue(items)
      } else {
        rejectWithValue('error updating user doc')
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// fetching items from firebase for a user
export const getUserData = createAsyncThunk(
  'tasks/getUserData',
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
        return fulfillWithValue(data.items)
      }
    } catch (error) {
      console.log('error getting user data', error)
      return rejectWithValue(error.message)
    }
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items = payload
    },
    updateItems: (state, { payload }) => {
      state.items = payload
    },
    deleteItem: (state, { payload }) => {
      state.items = payload
    },
    setActiveId: (state, { payload }) => {
      state.activeId = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateItemThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateItemThunk.fulfilled, (state, { payload }) => {
      state.loading = false
      state.items = payload
      state.error = null
    })
    builder.addCase(updateItemThunk.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.items = payload
      state.error = null
    })
    builder.addCase(getUserData.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  },
})

export const { updateItems, addItem, deleteItem, setActiveId } =
  tasksSlice.actions
export default tasksSlice.reducer
