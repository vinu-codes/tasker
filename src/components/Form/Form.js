import React from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background: red;
  padding: 20px;
`

const Input = styled.input`
  outline: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
`

const Form = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <Input />
        <Input />
        <Button className="submit">Submit</Button>
      </FormContainer>
    </FormWrapper>
  )
}

export { Form }
