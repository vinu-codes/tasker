import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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

const DateInput = () => {
  return (
    <DateContainer>
      <DateWrapper>
        <span className="label">Date</span>
        <DatePicker
          //   selected={state.date}
          //   onChange={handleDateChange}
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
  )
}

export { DateInput }
