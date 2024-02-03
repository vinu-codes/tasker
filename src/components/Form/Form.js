import React, { useContext, useState } from 'react'
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
  border: 1px solid black;
  padding: 20px;
  h3 {
    padding: 0;
    margin: 0;
    padding-bottom: 8px;
  }
  button {
    margin-top: 8px;
  }
`

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [currentPath, navigate] = useContext(NavigationContext)
  const handleSubmit = () => {
    if (
      !state.email ||
      !state.password ||
      !state.email.length ||
      !state.password.length
    ) {
      return
    }
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  return (
    <FormContainer>
      <h3>Sign In</h3>
      <Input
        name="email"
        placeholder="email"
        className="email"
        onChange={handleChange}
        value={state.email}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        className="password"
        onChange={handleChange}
        value={state.password}
        required
      />
      <Button onClick={handleSubmit} className="submit">
        Sign In
      </Button>
    </FormContainer>
  )
}

const SignUp = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [currentPath, navigate] = useContext(NavigationContext)

  const handleSubmit = () => {
    if (
      !state.email ||
      !state.password ||
      !state.email.length ||
      !state.password.length
    ) {
      return
    }
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }
  return (
    <FormContainer>
      <h3>Sign Up</h3>
      <Input
        name="email"
        placeholder="email"
        className="email"
        onChange={handleChange}
        value={state.email}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        className="password"
        onChange={handleChange}
        value={state.password}
        required
      />
      <Button onClick={handleSubmit} className="submit">
        Sign Up
      </Button>
    </FormContainer>
  )
}

const Form = () => {
  return (
    <FormWrapper>
      <h1>Welcome to Tasker</h1>
      <h2>Get started - it's free.</h2>
      <SignUp />
      <SignIn />
    </FormWrapper>
  )
}

export { Form }
