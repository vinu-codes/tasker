import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { deleteItem, updateItems } from '@state/tasks'
import { DeleteContents, EditContents } from '@components/ModalActions'
import { Modal } from '@common/Modal'
import { categorySelector } from '@state/category/selectors'
import { ControllerContainer, ControllerWrapper } from './Controller.styled'

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
    if (option.active) {
      return { ...option, category: category, active: false }
    } else return option
  })
  return result
}

const Controller = ({ callback }) => {
  const [showDeleteModal, setDeleteModal] = useState(false)
  const [showEditModal, setEditModal] = useState(false)
  const dispatch = useDispatch()
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)

  const total = totalSelected(items)

  const openEdit = () => {
    setEditModal(true)
  }

  const openDelete = () => {
    setDeleteModal(true)
  }

  const handleDeleteCallback = ({ value }) => {
    if (value === 'cancel') {
      setDeleteModal(false)
      callback(false)
    } else if (value === 'delete') {
      const payload = filterOutActiveItems(items)
      dispatch(deleteItem(payload))
      setDeleteModal(false)
      callback(false)
    }
  }

  const handleEditCallback = ({ name, value }) => {
    if (value === 'cancel') {
      setEditModal(false)
      callback(false)
    }
    if (name === 'change') {
      setEditModal(false)
      const result = changeCategoryOnActiveItems(items, value)

      dispatch(updateItems(result))
      callback(false)
    }
  }

  // RECEIVED FROM MODAL - LETS US KNOW THE MODAL HAS BEEN CLOSED
  const handleDeleteModal = ({ value = false }) => {
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
        <Button onClick={openDelete}>delete</Button>
        <Button onClick={openEdit}>change category</Button>
        {!!showDeleteModal && (
          <Modal title="Delete Confirmation" callback={handleDeleteModal}>
            <DeleteContents callback={handleDeleteCallback} />
          </Modal>
        )}
        {!!showEditModal && (
          <Modal title="Change category" callback={handleEditModal}>
            <EditContents
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
