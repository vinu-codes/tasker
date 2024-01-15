import React from 'react'
import { Group, SettingsContainer, List, Form } from './SettingsForm.styled'
import { Button } from '@common/Button'
import { Input } from '@common/Input'

const SettingsForm = ({ categories }) => {
  const renderCategory = () => {
    const result = categories.map((item) => {
      return (
        <List key={item.label}>
          <span>{item.label}</span>
        </List>
      )
    })
    return result
  }
  return (
    <SettingsContainer>
      <h3>Settings</h3>
      <Group>{renderCategory()}</Group>
      <Form>
        <Input name="add-category" placeholder="add category" />
      </Form>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </SettingsContainer>
  )
}

export { SettingsForm }
