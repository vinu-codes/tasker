import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { categorySelector } from '@state/category/selectors'

const ControllerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 28px;
`

const ControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  border: 1px solid black;
  padding: 20px;
`

const Controller = () => {
  const selectedItems = useSelector(tasksSelector.selectedItems)

  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <ControllerWrapper>
      <ControllerContainer>
        <div>
          <span>Items Selected: {selectedItems.length}</span>
        </div>
        <Button onClick={handleDelete}>delete</Button>
        <Button onClick={handleEdit}>edit</Button>
      </ControllerContainer>
    </ControllerWrapper>
  )
}

export { Controller }
