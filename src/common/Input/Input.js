import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.input`
  outline: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
  border-radius: 8px;
`

const Input = (props) => {
  return <InputContainer {...props} />
}

export { Input }
