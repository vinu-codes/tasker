import React, { useContext, useState } from 'react'
import { Search } from '@components/Search'
import { Controller } from '@features/Controller'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { updateItems, setActiveId } from '@state/tasks'
import { categorySelector } from '@state/category/selectors'
import { Icon } from '@common/Icon'
import { NavigationContext } from '@components/Route'
import {
  HomeWrapper,
  HomeContainer,
  HeadingContainer,
  List,
  IconContainer,
} from './Home.styled'
import { CompletedForm } from '@components/CompletedForm'

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
      return { ...option, active: !option.active }
    } else return option
  })
  return result
}

const resetArray = (items) => {
  const result = items.map((option) => {
    return { ...option, active: false }
  })
  return result
}

const Home = () => {
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)
  const activeId = useSelector(tasksSelector.activeId)
  const [filteredItems, setFilteredItems] = useState(items)
  const [toggleEdit, setToggleEdit] = useState(false)
  const dispatch = useDispatch()
  const data = createDataStructure(filteredItems, categories)
  const [_, navigate] = useContext(NavigationContext)

  const handleExpand = (item) => {
    navigate('/edit')
    dispatch(setActiveId(item.id))
  }

  const handleToggleEdit = () => {
    if (toggleEdit) {
      const payload = resetArray(items)
      dispatch(updateItems(payload))
    }
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

  const handleUndo = ({ value }) => {
    dispatch(updateItems(value))
  }

  const handleComplete = (id) => {
    const getSelected = items.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'completed' }
      } else {
        return item
      }
    })
    dispatch(updateItems(getSelected))
  }

  const renderTasks = (items) => {
    if (!items || !items.length) return null
    const result = items.map((item) => {
      if (item.status === 'completed') return null
      return (
        <List>
          {toggleEdit && (
            <span onClick={() => handleSelect(item)}>
              <Icon name={item.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
            </span>
          )}
          <span className="label">{item.label}</span>
          <button onClick={() => handleComplete(item.id)}>Completed</button>
          <IconContainer onClick={() => handleExpand(item)}>
            <Icon name="EXPAND" />
          </IconContainer>
        </List>
      )
    })
    return result
  }

  // const filter =
  //   item.items.filter((k) => k.status === 'incomplete').length !== 0

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
      <CompletedForm items={items} callback={handleUndo} />
      {toggleEdit && <Controller callback={setToggle} />}
    </>
  )
}

export { Home }
