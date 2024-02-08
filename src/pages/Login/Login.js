import React from 'react'
import { SignIn } from '@features/SignIn'
import { SignUp } from '@features/SignUp'
import styled from 'styled-components'

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .sign-in {
    margin-top: 26px;
  }
`
const Login = () => {
  return (
    <>
      <FormWrapper>
        <h1>Welcome to Tasker</h1>
        <h2>Get started - it's free.</h2>
        <SignUp />
        <SignIn />
      </FormWrapper>
    </>
  )
}

export { Login }
