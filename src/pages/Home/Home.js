import React, { useContext, useState } from 'react'
import { Search } from '@components/Search'
import { Controller } from '@features/Controller'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { updateItems, setActiveId } from '@state/tasks'
import { categorySelector } from '@state/category/selectors'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { Celebrate } from '@components/Celebrate'
import { NavigationContext } from '@components/Route'
import {
  HomeWrapper,
  HomeContainer,
  HeadingContainer,
  List,
  IconContainer,
  Controls,
  CategoryGroup,
  StyledSpan,
  LabelArea,
  Heading,
} from './Home.styled'
import { CompletedForm } from '@components/CompletedForm'
import { format } from 'date-fns/fp'

const createDataStructure = (items, categories) => {
  if (!categories || !categories.length || !items || !items.length) return []
  const data = categories.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.value]: {
        label: curr.label,
        color: curr.color,
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
    }
    return option
  })
  return result
}

const resetArray = (items) => {
  const result = items.map((option) => {
    return { ...option, active: false }
  })
  return result
}

const getSelected = (id, items) => {
  const result = items.map((item) => {
    if (item.id === id) {
      return { ...item, status: 'completed' }
    }
    return item
  })
  return result
}

const Home = () => {
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)
  const [filteredItems, setFilteredItems] = useState(items)
  const [celebrate, setCelebrate] = useState(false)
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

  const handleUndo = ({ action, value }) => {
    if (action === 'UNDO') {
      dispatch(updateItems(value))
    }
    if (action === 'DELETE') {
      console.log({ value })
      dispatch(updateItems(value))
    }
  }

  const handleComplete = (id) => {
    setCelebrate(true)
    dispatch(updateItems(getSelected(id, items)))
  }

  const handleCelebrate = ({ value }) => {
    setCelebrate(value)
  }

  const renderDate = (timestamp) => {
    const formattedDate = format('MMM dd', timestamp)
    console.log({ formattedDate })
    return formattedDate
  }

  const renderTasks = (items) => {
    console.log({ items })
    if (!items || !items.length) return null
    const result = items.map((item, index) => {
      if (item.status === 'completed') return null
      return (
        <List key={index}>
          {toggleEdit && (
            <span className="check-box" onClick={() => handleSelect(item)}>
              <Icon name={item.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
            </span>
          )}
          <LabelArea>
            <span className="label">{item.label}</span>
            <span className="date-label">{renderDate(item.date)}</span>
          </LabelArea>
          <Controls>
            <Button
              className="default-button"
              onClick={() => handleComplete(item.id)}
            >
              Done
            </Button>
            <Button
              className="detail-button"
              onClick={() => handleExpand(item)}
            >
              <Icon name="CHEVRON" size={20} />
            </Button>
          </Controls>
        </List>
      )
    })
    return result
  }

  const hasIncomplete = (categoryGroup) => {
    const hasLengthOnItems = categoryGroup.items.length > 0
    if (!hasLengthOnItems) {
      return null
    }
    const result =
      categoryGroup.items.filter((k) => k.status === 'incomplete').length > 0
    if (!result) return null
    return (
      <StyledSpan dynamicColor={categoryGroup.color}>
        <h4 className="category-label">{categoryGroup.label}</h4>
      </StyledSpan>
    )
  }

  const renderCategory = (data) => {
    console.log(data)
    if (!!data) {
      return data.map((item, index) => (
        <CategoryGroup key={index}>
          {hasIncomplete(item)}
          {renderTasks(item.items)}
        </CategoryGroup>
      ))
    }
  }

  return (
    <>
      <HomeWrapper>
        {celebrate && <Celebrate callback={handleCelebrate} />}
        <HomeContainer>
          <Heading>
            <h3 className="heading">My tasks</h3>
          </Heading>
          <HeadingContainer className="heading-container">
            <Button
              onClick={handleToggleEdit}
              className={toggleEdit ? 'toggle-cancel' : 'toggle-edit'}
            >
              {toggleEdit ? 'Cancel' : 'Edit'}
            </Button>
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
