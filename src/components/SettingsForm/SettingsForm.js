import React, { useContext, useState } from 'react'
import { Group, SettingsContainer, List, Form } from './SettingsForm.styled'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { NavigationContext } from '@components/Route'

const updatedCategories = (id, categories) => {
  if (!categories || !categories.length) return

  const result = categories.filter((item) => {
    return item.value !== id
  })
  return result
}

const SettingsForm = ({ categories, onAdd, onDelete }) => {
  const [value, setValue] = useState('')
  const [_, navigate] = useContext(NavigationContext)

  const handleDelete = (selectedItem) => {
    const result = updatedCategories(selectedItem, categories)
    onDelete(result)
  }

  const renderCategory = () => {
    if (!categories || !categories.length) return
    const result = categories.map((item) => {
      return (
        <List key={item.label}>
          <span>{item.label}</span>
          <button onClick={() => handleDelete(item.value)}>delete</button>
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
    onAdd({ label: value, value: value })
    setValue('')
  }

  return (
    <SettingsContainer>
      <h3>Settings</h3>
      <Group>{renderCategory()}</Group>
      <Form onSubmit={onSubmit}>
        <Input
          name="add-category"
          placeholder="add category"
          onChange={handleChange}
          value={value}
        />
        <Button>Save</Button>
        <Button onClick={handleNavigate}>Cancel</Button>
      </Form>
    </SettingsContainer>
  )
}

export { SettingsForm }
