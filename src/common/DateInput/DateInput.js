import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 16px;
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
const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  span.label {
    display: flex;
    font-size: 16px;
  }
`

const DateInput = ({
  value,
  onChange,
  name,
  eventDescription,
  dateLabel,
  timeLabel,
}) => {
  const renderDescription = (value, dateFormat) => {
    if (!!eventDescription) {
      return (
        <p className="event-description">
          This event will take place on {value}.
        </p>
      )
    }
  }

  return (
    <CalendarContainer>
      <CalendarWrapper className="calendar-wrapper">
        {!!dateLabel && (
          <DatePickerContainer>
            <span className="label">{dateLabel}</span>
            <DatePicker
              selected={value}
              onChange={onChange}
              dateFormat="MMMM d, yyyy"
              name={name}
            />
          </DatePickerContainer>
        )}
        {/* {!!timeLabel && (
          <DatePickerContainer>
            <span className="label">{timeLabel}</span>
            <DatePicker
              selected={value}
              onChange={onChange}
              dateFormat="MMMM d, yyyy"
              name={name}
            />
          </DatePickerContainer>
        )} */}
      </CalendarWrapper>
      {eventDescription && renderDescription(value, 'MMMM d, yyyy')}
    </CalendarContainer>
  )
}

export { DateInput }
