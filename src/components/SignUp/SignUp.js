import React, { useContext, useState, useEffect } from 'react'
import { FormContainer, InputContainer, SignInContainer } from './SignUp.styled'
import { Button } from '@common/Button'
import { NavigationContext } from '@components/Route'
import { Input } from '@common/Input'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '@state/auth'
import { authSelector } from '@state/auth'
import { Icon } from '@common/Icon'

const SignUp = ({ callback }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [_, navigate] = useContext(NavigationContext)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

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
        Sign Up
      </Button>
      <SignInContainer>
        <span>Already have an account?</span>
        <a href="#" onClick={() => navigate('/sign-in')}>
          Sign In
        </a>
      </SignInContainer>
    </FormContainer>
  )
}

export { SignUp }
