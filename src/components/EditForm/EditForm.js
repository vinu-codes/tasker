import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { Icon } from '@common/Icon'
import { Dropdown } from '@common/Dropdown'
import { TextArea } from '@common/TextArea'
import { DateInput } from '@common/DateInput'
import { NavigationContext } from '@components/Route'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { categorySelector } from '@state/category/selectors'
import { updateItems } from '@state/tasks'
import { media } from '@common/Theme/media'
import { format } from 'date-fns/fp'

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.sm`
  max-width: 480px;
  margin: 0 auto;`}
  ${media.md`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;`}
  ${media.lg`
  max-width: 1024px;
  margin: 0 auto;`}
`

const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.2);
  div.header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    background: rgb(174, 174, 174);
    border-radius: 8px 8px 0 0;
    h3 {
      font-weight: normal;
    }
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  button {
    margin-top: 8px;
  }
  input {
    padding: 8px;
    margin-bottom: 8px;
  }
  input.detail {
    padding-bottom: 46px;
  }
`

const getData = (id, items) => {
  if (!items || !id || !id === null) return null
  const result = items.find((item) => {
    return item.id === id
  })
  return !!result ? result : null
}

const updateItem = (id, items, state) => {
  console.log({ id, items, state })
  if (!id || !items.length || !Object.keys(state).length) return []
  const result = items.map((item) => {
    if (item.id === id) {
      return { id, ...state }
    } else {
      return item
    }
  })
  return result
}

const filterActiveCategory = (categories) => {
  const result = categories.find((x) => {
    return x.active !== false
  })
  return result ? result.value : ''
}

const getActiveCategory = (categories, activeCategory) => {
  const result = categories.map((category) => {
    if (category.value === activeCategory) {
      return { ...category, active: true }
    } else {
      return category
    }
  })
  return result
}

const EditForm = () => {
  const [_, navigate] = useContext(NavigationContext)
  const activeId = useSelector(tasksSelector.activeId)
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)
  const dispatch = useDispatch()
  const data = getData(activeId, items) // is the selected item to edit

  const formatedTimeStamp =
    !!data && !!data.date
      ? format('MMMM d, yyyy')(data.date)
      : format('MMMM d, yyyy')(new Date().getTime())

  const [state, setState] = useState({
    label: '',
    details: '',
    category: '',
    ...data,
    date: formatedTimeStamp,
  })

  console.log({ date: state.date })

  const timeStamp = new Date(state.date).getTime()

  const [localCategories, setLocalCategories] = useState(
    getActiveCategory(categories, !!data ? data.category : '')
  )

  const clearForm = () => {
    setState({
      label: '',
      date: '',
      details: '',
      category: [],
    })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log({ name, value })
    setState((state) => ({ ...state, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    const selectedCategory = filterActiveCategory(localCategories)
    const result = updateItem(activeId, items, {
      ...state,
      category: selectedCategory,
      date: timeStamp,
    })
    console.log({ result })
    dispatch(updateItems(result))
    clearForm()
    navigate('/')
  }

  const handleCalendar = (date) => {
    console.log({ date })
    const formatedTime = format('MMMM d, yyyy')(date)
    console.log({ formatedTime }) // "April 12, 2024"
    setState((state) => ({ ...state, date: formatedTime }))
  }

  return (
    <EditWrapper className="create-wrapper">
      <EditContainer>
        <div className="header">
          <h3>Edit task</h3>
        </div>
        <FormContainer>
          <Input
            onChange={handleChange}
            label="Name:"
            name="label"
            value={state.label}
            required
          />
          <DateInput
            value={state.date}
            onChange={handleCalendar}
            name="date"
            dateLabel="Date"
            timeLabel="Time"
            eventDescription
          />
          <TextArea
            name="details"
            onChange={handleChange}
            label="Details:"
            value={state.details}
            rows={6}
          />
          <Dropdown
            label="Category"
            options={localCategories}
            isMulti={false}
            callback={({ value }) => {
              setLocalCategories(value)
            }}
          />
          <Button onClick={handleSave} className="save-button">
            Create
          </Button>
          <Button className="cancel-button" onClick={handleCancel}>
            Cancel
          </Button>
        </FormContainer>
      </EditContainer>
    </EditWrapper>
  )
}

export { EditForm }
