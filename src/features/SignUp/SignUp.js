import React, { useContext, useState, useEffect } from 'react'
import { FormContainer, InputContainer, SignInContainer } from './SignUp.styled'
import { Button } from '@common/Button'
import { NavigationContext } from '@components/Route'
import { Input } from '@common/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@common/Icon'
import { signUpUser } from '@state/auth'
import { authSelector } from '@state/auth'

const SignUp = ({ callback }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [_, navigate] = useContext(NavigationContext)
  const uid = useSelector(authSelector.uid)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    if (!!uid) {
      navigate('/')
    }
  }, [uid])

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
    dispatch(signUpUser({ email: state.email, password: state.password }))
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
        >
          <span className="icon" onClick={handleTogglePassword}>
            <Icon
              name={!!showPassword ? 'EYE_OPEN' : 'EYE_CLOSE'}
              size={24}
              viewBox="-1 -2 24 24"
            />
          </span>
        </Input>
      </InputContainer>
      <Button onClick={handleSubmit} className="submit">
        Sign Up
      </Button>
      <SignInContainer>
        <span>Already have an account?</span>
        <button
          className="redirect"
          onClick={() => callback({ value: 'sign-in' })}
        >
          Sign In
        </button>
      </SignInContainer>
    </FormContainer>
  )
}

export { SignUp }
