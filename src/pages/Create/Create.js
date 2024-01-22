import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateForm } from '@components/CreateForm'
import { addItem } from '@state/tasks'
import { categorySelector } from '@state/category/selectors'

const Create = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categorySelector.categories)

  const handleData = (payload) => {
    dispatch(addItem(payload))
  }

  return <CreateForm callback={handleData} categories={categories} />
}

export { Create }
