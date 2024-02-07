import React, { useContext, useState, useEffect } from 'react'
import { FormContainer, InputContainer } from './SignIn.styled'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import styled from 'styled-components'
import { Icon } from '@common/Icon'

const SignIn = ({ callback }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !state.email ||
      !state.password ||
      !state.email.length ||
      !state.password.length
    ) {
      return
    }
    callback({ email: state.email, password: state.password })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  return (
    <FormContainer className="sign-in">
      <h3>Sign In</h3>
      <Input
        name="email"
        placeholder="email"
        className="email"
        onChange={handleChange}
        value={state.email}
        required
      />
      <InputContainer>
        <Input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          className="password"
          onChange={handleChange}
          value={state.password}
          required
        />
        <span className="icon" onClick={handleTogglePassword}>
          <Icon name={!!showPassword ? 'EYE_OPEN' : 'EYE_CLOSE'} size={24} />
        </span>
      </InputContainer>
      <Button onClick={handleSubmit} className="submit">
        Sign In
      </Button>
    </FormContainer>
  )
}

export { SignIn }
