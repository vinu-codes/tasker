import React, { useState, useContext } from 'react'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { NavigationContext } from '@components/Route'
import { Dropdown } from '@common/Dropdown'
import { Toggle } from '@common/Toggle'
import { MapsInput } from '@components/MapsInput'
import { DateInput } from '@common/DateInput'
import {
  CreateContainer,
  CreateWrapper,
  FormContainer,
} from './CreateForm.styled'
import { uuid } from 'src/utils'

import { Icon } from '@common/Icon'
import styled from 'styled-components'
import { TextArea } from '@common/TextArea'

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 25%;
  margin-left: auto;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const filterActiveItem = (items) => {
  const result = items.find((x) => {
    return x.active !== false
  })
  return !!result ? result.value : ''
}

const CreateForm = ({ callback, categories, items }) => {
  const currentDate = new Date()
  const timestamp = currentDate.getTime()

  const [state, setState] = useState({
    label: '',
    date: timestamp,
    details: '',
    location: '',
    category: categories,
    status: false,
  })
  const [isActive, setIsActive] = useState(false)

  const [_, navigate] = useContext(NavigationContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  const clearForm = () => {
    setState({
      label: '',
      date: '',
      details: '',
      status: false,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const resultOfCategory = filterActiveItem(state.category)

    callback([
      ...items,
      {
        ...state,
        category: !!resultOfCategory ? resultOfCategory : 'personal',
        id: uuid(),
      },
    ])
    clearForm()
    navigate('/')
  }

  const handleCancel = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleDropdown = (payload) => {
    const { name, value } = payload
    setState((state) => ({ ...state, [name]: value }))
  }

  const onToggleChange = ({ name, value }) => {
    console.log({ name, value }) // {name: 'status', value: false}
    setState((state) => ({ ...state, [name]: value }))
    setIsActive(!isActive)
  }

  const handleDateChange = (date) => {
    setState((state) => ({ ...state, date: date }))
  }

  return (
    <CreateWrapper className="create-wrapper">
      <CreateContainer>
        <div className="header">
          <h3>Create Task</h3>
        </div>
        <FormContainer onSubmit={onSubmit}>
          <Input
            name="label"
            id="dateInput"
            className="name"
            onChange={handleChange}
            value={state.label}
            required
            label="Task Name"
          />
          <TextArea
            name="details"
            className="detail"
            onChange={handleChange}
            value={state.details}
            required
            label="Details of task"
            rows={5}
          />
          {/* <Input
            name="location"
            className="location"
            onChange={handleChange}
            value={state.location}
            required
            label="Location"
          /> */}
          <MapsInput />
          <Dropdown
            name="category"
            isMulti={false}
            callback={handleDropdown}
            options={state.category}
            label="Category"
          />
          {/* <Dropdown
            name="status"
            isMulti={false}
            callback={handleDropdown}
            options={state.status}
          /> */}
          <Toggle
            isActive={isActive}
            onChange={onToggleChange}
            name="status"
            value={state.status}
            label="Completed"
            id="status"
            mt={16}
          />
          <ButtonContainer className="button-container">
            <Button className="save-button">Create</Button>
            <Button className="cancel-button" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonContainer>
        </FormContainer>
      </CreateContainer>
    </CreateWrapper>
  )
}

export { CreateForm }
