import React from 'react'
import { SettingsForm } from '@components/SettingsForm'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory } from '@state/category'
import { categorySelector } from '@state/category/selectors'
import { updateCategoryThunk } from '@state/category'
import { authSelector } from '@state/auth'

const Settings = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categorySelector.categories)
  const uid = useSelector(authSelector.uid)

  // const handleAdd = (payload) => {
  //   dispatch(updateCategoryThunk({ uid, categories: payload }))
  // }
  const handleDelete = (payload) => {
    dispatch(updateCategoryThunk({ uid, categories: payload }))
  }

  return (
    <SettingsForm
      categories={categories}
      // onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}

export { Settings }
