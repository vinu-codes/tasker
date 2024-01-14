import React, { useEffect, useContext } from 'react'
import { NavBar } from '@components/NavBar'
import styled from 'styled-components'
import { NavigationContext } from '@components/Route'

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 60px;
`

const Layout = ({ children, ...props }) => {
  const [_, navigate] = useContext(NavigationContext)
  const isAuth = false

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <>
      <NavBar />
      <LayoutContainer {...props}>{children}</LayoutContainer>
    </>
  )
}

export { Layout }
