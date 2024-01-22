import React from 'react'
import { SettingsForm } from '@components/SettingsForm'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory } from '@state/category'
import { categorySelector } from '@state/category/selectors'

const Settings = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categorySelector.categories)

  const handleAdd = (payload) => {
    dispatch(addCategory(payload))
  }
  const handleDelete = (payload) => {
    dispatch(deleteCategory(payload))
  }

  return (
    <SettingsForm
      categories={categories}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}

export { Settings }
