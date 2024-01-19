import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { deleteItem, updateItems } from '@state/tasks'
import { DeleteModal, EditCategory } from '@components/DeleteModal'
import { Modal } from '@common/Modal'
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
  button {
    margin-top: 8px;
  }
`
const totalSelected = (options) => {
  if (!options || !options.length) return 0
  const result = options.filter((option) => {
    return option.active
  })
  return result.length
}

const filterOutActiveItems = (items) => {
  if (!items || !items.length) return
  const result = items.filter((item) => {
    return item.active !== true
  })
  return result
}

const filterByActiveItems = (items) => {
  if (!items || !items.length) return
  const result = items.filter((item) => {
    return item.active === true
  })
  console.log({ result })
  return result
}

const changeCategoryOnActiveItems = (items, category) => {
  if (!items || !items.length) return []
  const result = items.map((option) => {
    return { ...option, category: category }
  })
  return result
}

const Controller = () => {
  const [showDeleteModal, setDeleteModal] = useState(false)
  const [showEditModal, setEditModal] = useState(false)
  const dispatch = useDispatch()
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)

  const total = totalSelected(items)

  const handleEdit = () => {
    setEditModal(true)
  }

  const handleDelete = () => {
    setDeleteModal(true)
  }

  const handleCallback = ({ value }) => {
    if (value === 'cancel') {
      setDeleteModal(false)
    } else if (value === 'delete') {
      const payload = filterOutActiveItems(items)
      dispatch(deleteItem(payload))
      setDeleteModal(false)
    }
  }
  const handleEditCallback = ({ name, value }) => {
    if (value === 'cancel') {
      setEditModal(false)
    }
    if (name === 'change') {
      setEditModal(false)
      const payload = filterByActiveItems(items)
      const result = changeCategoryOnActiveItems(payload, value)

      console.log({ result })
      dispatch(updateItems(result))

      // update items
    }
  }

  const handleModal = ({ value }) => {
    setDeleteModal(value)
  }
  const handleEditModal = ({ value }) => {
    setEditModal(value)
  }

  const renderText = () => {
    if (total === 1) {
      return `Item selected: ${total}`
    }
    return total ? `Items Selected: ${total}` : 'No items selected:'
  }

  return (
    <ControllerWrapper>
      <ControllerContainer>
        <div>
          <span>{renderText()}</span>
        </div>
        <Button onClick={handleDelete}>delete</Button>
        <Button onClick={handleEdit}>change category</Button>
        {!!showDeleteModal && (
          <Modal title="Delete Confirmation" callback={handleModal}>
            <DeleteModal callback={handleCallback} />
          </Modal>
        )}
        {!!showEditModal && (
          <Modal title="Change category" callback={handleEditModal}>
            <EditCategory
              callback={handleEditCallback}
              categories={categories}
            />
          </Modal>
        )}
      </ControllerContainer>
    </ControllerWrapper>
  )
}

export { Controller }
