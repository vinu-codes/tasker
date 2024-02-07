import React, { useContext, useState, useEffect } from 'react'
import { SignIn } from '@components/SignIn'
import { SignUp } from '@components/SignUp'
import { FormWrapper } from './LoginForm.styled'
import { Button } from '@common/Button'
import { NavigationContext } from '@components/Route'
import { Input } from '@common/Input'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '@state/auth'
import { authSelector } from '@state/auth'
import { Logo } from '@components/Logo'

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleSignUp = ({ email, password }) => {
    console.log('sign up')
  }
  const handleSignIn = ({ email, password }) => {
    console.log('sign in', { email, password })
    dispatch(signIn({ email, password }))
  }

  return (
    <>
      <Logo />
      <FormWrapper>
        <h1>Welcome to Tasker</h1>
        <h2>Get started - it's free.</h2>
        <SignUp callback={handleSignUp} />
        <SignIn callback={handleSignIn} />
      </FormWrapper>
    </>
  )
}

export { LoginForm }
