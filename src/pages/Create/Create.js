import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateForm } from '@components/CreateForm'
import { addItem } from '@state/tasks'

const Create = () => {
  const dispatch = useDispatch()

  const handleData = (payload) => {
    dispatch(addItem(payload))
  }

  return <CreateForm callback={handleData} />
}

export { Create }
