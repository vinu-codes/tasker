// import React, { useState } from 'react'
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunk from 'redux-thunk'

// // action types: user
// const itemTypes = {
//   ADD_ITEM: 'ADD_ITEM',
//   DELETE_ITEM: 'DELETE_ITEM',
//   SELECT_ACTIVE: 'SELECT_ACTIVE',
//   SET_FAV: 'SET_FAV',
// }

// const initialState = {
//   items: [],
// }

// const addItem = (data) => {
//   return {
//     type: itemTypes.ADD_ITEM,
//     payload: data,
//   }
// }

// const deleteItem = (data) => {
//   return {
//     type: itemTypes.DELETE_ITEM,
//     payload: data,
//   }
// }

// const setActiveItem = (data) => {
//   return {
//     type: itemTypes.SELECT_ACTIVE,
//     payload: data,
//   }
// }

// const setFavItem = (data) => {
//   return {
//     type: itemTypes.SET_FAV,
//     payload: data,
//   }
// }

// const itemReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case itemTypes.ADD_ITEM:
//       console.log({ payload })
//       return {
//         ...state,
//         items: payload,
//       }
//     case itemTypes.DELETE_ITEM:
//       console.log({ payload })
//       return {
//         ...state,
//         items: payload,
//       }
//     case itemTypes.SELECT_ACTIVE:
//       return {
//         ...state,
//         items: payload,
//       }
//     case itemTypes.SET_FAV:
//       return {
//         ...state,
//         items: payload,
//       }
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//   item: itemReducer,
// })

// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// export { setActiveItem, addItem, setFavItem, deleteItem }
// export { store }
