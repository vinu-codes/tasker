import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
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
import { Banner } from '@components/Banner'
import { colors } from '@common/Theme'
import {
  HomeWrapper,
  HomeContainer,
  HeadingContainer,
  List,
  IconContainer,
} from './Home.styled'
import { CompletedForm } from '@components/CompletedForm'
import { Timer } from '@features/Timer'

const Controls = styled.div`
  display: flex;
  margin-left: auto;
  button.detail-button {
    border-radius: 50%;
    margin-left: 8px;
    svg {
      transform: rotate(90deg);
      path {
        fill: black;
      }
    }
  }
  button.done {
    &:hover {
      background: ${colors.lightOrange};
    }
  }
  svg.MORE {
    path {
      stroke: black;
    }
  }
  span.date {
    margin-right: 8px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    padding: 8px;
    color: lightcoral;
    font-size: 16px;
    border-radius: 4px;
  }
`

const CategoryGroup = styled.div`
  margin-bottom: 16px;
`

const StyledSpan = styled.span`
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 2px;
  border-radius: 4px 4px 0 0;
  ${(props) =>
    props.dynamicColor &&
    css`
      background-color: ${props.dynamicColor};
    `}
`

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

const calculateDate = (date) => {
  const currentDate = new Date()
  const selectedDate = new Date(date)
  const difference = selectedDate - currentDate
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  return days
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

  const handleUndo = ({ value }) => {
    dispatch(updateItems(value))
  }

  const handleComplete = (id) => {
    setCelebrate(true)
    dispatch(updateItems(getSelected(id, items)))
  }

  const handleCelebrate = ({ value }) => {
    setCelebrate(value)
  }

  const renderDate = (date) => {
    // i want to get the date and show how many days left till the date
    const result = calculateDate(date)
    console.log(result)
    if (result === -1) {
      return <span>Today</span>
    } else if (result > 1) {
      return <span>{result} days left</span>
    } else if (result === 1) {
      return <span>{result} day left</span>
    } else if (result === 0) {
      return <span>Today</span>
    }
  }

  const renderTasks = (items) => {
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
          <span className="label">{item.label}</span>
          <Controls>
            {item.date && <span className="date">{renderDate(item.date)}</span>}
            <Button className="done" onClick={() => handleComplete(item.id)}>
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
        <Banner />
        <HomeContainer>
          <HeadingContainer className="heading-container">
            <h3>My tasks</h3>
            <Button
              onClick={handleToggleEdit}
              className={toggleEdit ? 'toggle cancel' : 'toggle edit'}
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
