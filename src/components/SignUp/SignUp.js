import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { NavigationContext } from '@components/Route'
import { Input } from '@common/Input'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '@state/auth'
import { authSelector } from '@state/auth'
import { colors } from '@common/Theme'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border: 2px solid black;
  padding: 20px;

  h3 {
    padding: 0;
    margin: 0;
    padding-bottom: 16px;
    font-weight: normal;
  }
  button {
    margin-top: 8px;
    background: ${colors.rust};
    color: ${colors.white};
    font-weight: normal;
    border: 1px solid ${colors.rust};
    &:hover {
      background: #c3392c;
      color: white;
      border: 1px solid #c3392c;
    }
  }
`

const SignUp = ({ callback }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [_, navigate] = useContext(NavigationContext)

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
    <FormContainer className="sign-up">
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

export { SignUp }
