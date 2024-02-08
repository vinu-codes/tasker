import React, { useContext, useState, useEffect } from 'react'
import { FormContainer, InputContainer, SignUpContainer } from './SignIn.styled'
import { Button } from '@common/Button'
import { Input } from '@common/Input'
import { Icon } from '@common/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '@state/auth'
import { authSelector } from '@state/auth'

const SignIn = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const error = useSelector(authSelector.error)
  console.log(error)

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
    const payload = { email: state.email, password: state.password }
    dispatch(signIn(payload))
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
      {!!error && (
        <span className="error">
          Invalid username or password. Please try again.
        </span>
      )}
      <Button onClick={handleSubmit} className="submit">
        Sign In
      </Button>
      <SignUpContainer>
        <span>Don't have an account?</span>
        <a href="/signup">Sign Up</a>
      </SignUpContainer>
    </FormContainer>
  )
}

export { SignIn }