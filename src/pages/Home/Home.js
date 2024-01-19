import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Search } from '@components/Search'
import { Controller } from '@features/Controller'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { updateItems } from '@state/tasks'
import { categorySelector } from '@state/category/selectors'
import { Icon } from '@common/Icon'

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  border: 1px solid black;
  padding: 20px;
`

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 0;
  button {
    cursor: pointer;
    user-select: none;
    border: none;
    background: none;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    margin-left: auto;
    width: 70px;
  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const List = styled.li`
  user-select: none;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  padding: 8px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  span.circle {
    display: inline-block;
    background: grey;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
    &.active {
      background: red;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const createDataStructure = (items, categories) => {
  if (!categories || !categories.length || !items || !items.length) return []
  const data = categories.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.value]: {
        label: curr.label,
        items: items.filter((item) => {
          return item.category === curr.value
        }),
      },
    }
  }, {})
  const result = Object.values(data)
  return result
}

const updatedArray = (selected, options) => {
  if (!options || !options.length) return []
  const result = options.map((option) => {
    if (selected.label === option.label) {
      return { ...option, ['active']: !option.active }
    } else return option
  })
  return result
}

const Home = () => {
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)
  const [filteredItems, setFilteredItems] = useState(items)
  const [toggleEdit, setToggleEdit] = useState(false)
  const dispatch = useDispatch()
  const data = createDataStructure(filteredItems, categories)

  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit)
  }

  const handleCallback = ({ value }) => {
    setFilteredItems(value)
  }

  const handleSelect = (item) => {
    const payload = updatedArray(item, items)
    console.log({ payload })
    dispatch(updateItems(payload))
  }

  const setToggle = (arg) => {
    setToggleEdit(arg)
  }

  const renderTasks = (items) => {
    if (!items || !items.length) return null
    const result = items.map((item) => {
      return (
        <List onClick={() => handleSelect(item)}>
          <span className={item.active ? 'circle active' : 'circle'}></span>
          <span>{item.label}</span>
          <IconContainer>
            <Icon name="EXPAND" />
          </IconContainer>
        </List>
      )
    })
    return result
  }

  const renderCategory = (data) => {
    if (!!data) {
      return data.map((item) => (
        <div>
          {!!item.items.length && <span>{item.label}</span>}
          {renderTasks(item.items)}
        </div>
      ))
    }
  }

  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <HeadingContainer className="heading-container">
            <span className="my-tasks">My tasks</span>
            <button
              onClick={handleToggleEdit}
              className={toggleEdit ? 'toggle cancel' : 'toggle edit'}
            >
              {toggleEdit ? 'Cancel' : 'Edit'}
            </button>
          </HeadingContainer>
          <Search name="search" items={items} callback={handleCallback} />
          {renderCategory(data)}
        </HomeContainer>
      </HomeWrapper>
      {toggleEdit && <Controller callback={setToggle} />}
    </>
  )
}

export { Home }
