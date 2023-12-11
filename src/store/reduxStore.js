import React, { useState } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

// action types: user
const itemTypes = {
  ADD_ITEM: 'ADD_ITEM',
  SELECT_ACTIVE: 'SELECT_ACTIVE',
  SET_FAV: 'SET_FAV',
}

// [
// { label: 'Chocolate', id: 1, active: false, favorite: false },
// { label: 'Peanut Butter', id: 2, active: false, favorite: false },
// ]

const initialState = {
  items: [],
}

const addItem = (data) => {
  return {
    type: itemTypes.ADD_ITEM,
    payload: data,
  }
}

const setActiveItem = (data) => {
  return {
    type: itemTypes.SELECT_ACTIVE,
    payload: data,
  }
}

const setFavItem = (data) => {
  return {
    type: itemTypes.SET_FAV,
    payload: data,
  }
}

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case itemTypes.ADD_ITEM:
      console.log(payload)
      return {
        ...state,
        items: payload,
      }
    case itemTypes.SELECT_ACTIVE:
      return {
        ...state,
        items: payload,
      }
    case itemTypes.SET_FAV:
      return {
        ...state,
        items: payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  item: itemReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// const Component = () => {
//   const [value, setValue] = useState('')

//   const dispatch = useDispatch()

//   const {items, title } = useSelector((state) => state.user)

//   const handleInput = (e) => {
//     const { value } = e.target
//     setValue(value)
//   }

//   const handleAddUser = () => {
//     dispatch(addUser(value))
//   }

//   const renderUsers =items.map((user) => {
//     return <div>{user}</div>
//   })

//   return (
//     <Container>
//       <h1>{title}</h1>
//       <input value={value} type="text" onChange={handleInput} />
//       <button onClick={handleAddUser}>Add User</button>
//       {renderUsers}
//     </Container>
//   )
// }

// export default Component
export { store }
export { setActiveItem, addItem, setFavItem }
