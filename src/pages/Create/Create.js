import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateForm } from '@components/CreateForm'
import { addItem } from '@state/tasks'
import { categorySelector } from '@state/category/selectors'
import { tasksSelector } from '@state/tasks/selectors'
import { authSelector } from '@state/auth'
import { updateItemThunk } from '@state/tasks'

const Create = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categorySelector.categories)
  const items = useSelector(tasksSelector.items)
  const uid = useSelector(authSelector.uid)

  const handleData = (payload) => {
    console.log({ payload })
    dispatch(updateItemThunk({ uid, items: payload }))
  }

  return (
    <CreateForm callback={handleData} categories={categories} items={items} />
  )
}

export { Create }
