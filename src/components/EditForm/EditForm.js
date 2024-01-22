import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { Icon } from '@common/Icon'
import { Dropdown } from '@common/Dropdown'
import { TextArea } from '@common/TextArea'
import { NavigationContext } from '@components/Route'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { categorySelector } from '@state/category/selectors'
import { updateItems } from '@state/tasks'

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  border: 1px solid black;
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
  return !!result ? result : {}
}
const updateItem = (id, items, state) => {
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
  const data = getData(activeId, items)

  const [state, setState] = useState({
    label: '',
    date: '',
    details: '',
    category: '',
    ...data,
  })

  const [localCategories, setLocalCategories] = useState(
    getActiveCategory(categories, data.category)
  )

  const randomArray = [{ label: 'coding', value: 'coding' }]

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
    setState((state) => ({ ...state, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    const selectedCategory = filterActiveCategory(localCategories)
    const result = updateItem(activeId, items, {
      ...state,
      category: selectedCategory,
    })
    dispatch(updateItems(result))
    clearForm()
    navigate('/')
  }

  return (
    <EditWrapper className="create-wrapper">
      <EditContainer>
        <FormContainer>
          <Input
            onChange={handleChange}
            label="Name:"
            name="label"
            value={state.label}
            icon="edit"
          />
          <Input
            onChange={handleChange}
            label=" Date:"
            value={state.date}
            name="date"
            type="date"
            icon="edit"
          />

          <TextArea
            name="details"
            onChange={handleChange}
            label="Details:"
            value={state.details}
            rows={6}
            icon="edit"
          />
          <Dropdown
            options={localCategories}
            isMulti={false}
            callback={({ value }) => {
              setLocalCategories(value)
            }}
          />
          <Button onClick={handleSave} className="save-button">
            Save
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
