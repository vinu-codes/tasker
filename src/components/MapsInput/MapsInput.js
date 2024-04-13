import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import styled from 'styled-components'

const MapsContainer = styled.div`
  .css-13cymwt-control {
    border: 1px solid grey;
    border-radius: 8px;
    padding: 0px 8px;
    height: 48px;
    font-size: 16px;
    color: black;
    background: transparent;
    margin-bottom: 16px;
    &:focus {
      border: 1px solid grey;
      border-radius: 8px;
      outline: none;
      border-color: black;
      border: 1px solid grey;
      border-radius: 8px;
      padding: 0px 8px;
      height: 48px;
      font-size: 16px;
      color: black;
      background: transparent;
      margin-bottom: 16px;
    }
    &:hover {
      border: 1px solid grey;
      border-radius: 8px;
      outline: none;
      border-color: black;
      border: 1px solid grey;
      border-radius: 8px;
      padding: 0px 8px;
      height: 48px;
      font-size: 16px;
      color: black;
      background: transparent;
      margin-bottom: 16px;
    }
  }
`

const MapsInput = () => {
  const [value, setValue] = useState(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      // Remove the last character from the input value
      setValue((prevValue) => (prevValue ? prevValue.slice(0, -1) : ''))
    }
  }

  return (
    <MapsContainer>
      {' '}
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
          onKeyDown: handleKeyDown,
        }}
        apiKey="AIzaSyDdtOeiRKmjLHvLpw5nydrwEhC-1Savwf4"
        placeholder="Type in an address or location..."
      />
    </MapsContainer>
  )
}

export { MapsInput }
