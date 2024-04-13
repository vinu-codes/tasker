import React, { useState, useContext } from 'react'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { NavigationContext } from '@components/Route'
import { Dropdown } from '@common/Dropdown'
import { Toggle } from '@common/Toggle'
import { MapsInput } from '@components/MapsInput'
import {
  CreateContainer,
  CreateWrapper,
  FormContainer,
} from './CreateForm.styled'
import { uuid } from 'src/utils'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Icon } from '@common/Icon'
import styled from 'styled-components'
import { TextArea } from '@common/TextArea'

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 25%;
  margin-left: auto;
`

const DateContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
  flex-direction: column;
  p {
    font-size: 14px;
    font-style: italic;
    color: grey;
    margin: 0;
  }
  span.label {
    display: flex;
    font-size: 16px;
    transition: all 0.2s ease 0s;
    color: grey;
    margin-bottom: 8px;
    font-weight: normal;
  }
  .react-datepicker-wrapper {
    input {
      outline: none;
      padding: 0px 0px 0px 8px;
      margin: 0px;
      border: 1px solid grey;
      border-radius: 8px;
      width: 100%;
      height: 48px;
      background: transparent;
      font-size: 16px;
      color: black;
    }
  }
`
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  const [state, setState] = useState({
    label: '',
    date: new Date(),
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
          {/* <Input
            name="date"
            type="date"
            className="date"
            onChange={handleChange}
            value={state.date}
            required
          /> */}
          <DateContainer>
            <DateWrapper>
              <span className="label">Date</span>
              <DatePicker
                selected={state.date}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
              />
            </DateWrapper>
            {/* <TimeWrapper>
              <span className="label">Time</span>
              <DatePicker
                selected={state.time}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
              />
            </TimeWrapper> */}
            <p>This event will take place on April 12th, 2024 from 2pm.</p>
          </DateContainer>
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
