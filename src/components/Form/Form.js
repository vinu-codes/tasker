import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { NavigationContext } from '@components/Route'
import { Input } from '@common/Input'

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background: red;
  padding: 20px;
  h3 {
    padding: 0;
    margin: 0;
    padding-bottom: 8px;
  }
  input {
    padding: 4px;
    margin-top: 2px;
  }
  button {
    margin-top: 8px;
  }
`

const Form = () => {
  const [currentPath, navigate] = useContext(NavigationContext)

  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <FormWrapper>
      <FormContainer>
        <h3>Sign Up</h3>
        <Input />
        <Input />
        <Button onClick={handleSubmit} className="submit">
          Sign Up
        </Button>
      </FormContainer>
      <FormContainer>
        <h3>Sign In</h3>
        <Input />
        <Input />
        <Button onClick={handleSubmit} className="submit">
          Sign In
        </Button>
      </FormContainer>
    </FormWrapper>
  )
}

export { Form }
