import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Group,
  SettingsContainer,
  List,
  Form,
  Controls,
} from './SettingsForm.styled'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { Icon } from '@common/Icon'
import { NavigationContext } from '@components/Route'
import { colorPicker } from '@common/Theme'
import { ColorPicker } from '@components/ColorPicker'
import { getCategoryData } from '@state/category'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '@state/auth'
import { categorySelector } from '@state/category'
import { updateCategoryThunk } from '@state/category'

const CategegoryControls = styled.div`
  display: flex;
  margin-left: auto;
  div.selected-color {
    width: 38px;
    height: 38px;
    background: ${(props) => props.color};
    margin-right: 8px;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: inset 0 0 0 4px white;
  }
`

const updatedCategories = (id, categories) => {
  if (!categories || !categories.length) return

  const result = categories.filter((item) => {
    return item.value !== id
  })
  return result
}

const SettingsForm = ({ onAdd, onDelete }) => {
  const [value, setValue] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [_, navigate] = useContext(NavigationContext)
  const uid = useSelector(authSelector.uid)
  const categories = useSelector(categorySelector.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryData(uid))
  }, [])

  console.log('categories', categories)

  const handleDelete = (selectedItem) => {
    const result = updatedCategories(selectedItem, categories)
    onDelete(result)
  }

  const renderCategory = () => {
    if (!categories || !categories.length) return
    const result = categories.map((item) => {
      return (
        <List color={item.color} key={item.label}>
          <span className="label">{item.label}</span>
          <CategegoryControls color={item.color}>
            <div className="selected-color"></div>
            <Button onClick={() => handleDelete(item.value)}>
              <Icon name="TRASH" />
            </Button>
          </CategegoryControls>
        </List>
      )
    })
    return result
  }

  const handleNavigate = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!value || !value.length) {
      return
    }

    // onAdd({ label: value, value: value, active: false, color: selectedColor })
    dispatch(
      updateCategoryThunk({
        uid,
        categories: [
          ...categories,
          { value, color: selectedColor, active: false, label: value },
        ],
      })
    )
    setValue('')
  }

  const handleColor = ({ value }) => {
    setSelectedColor(value)
  }

  return (
    <SettingsContainer>
      <h3>Settings</h3>
      <h4>Categories</h4>
      <Group>{renderCategory()}</Group>
      <Form onSubmit={onSubmit}>
        <Input
          name="add-category"
          onChange={handleChange}
          value={value}
          label="add Category"
          required
        />
        <ColorPicker
          colors={colorPicker}
          callback={handleColor}
          value={selectedColor}
        />
        <Controls>
          <Button>Save</Button>
          <Button onClick={handleNavigate}>Cancel</Button>
        </Controls>
      </Form>
    </SettingsContainer>
  )
}

export { SettingsForm }
