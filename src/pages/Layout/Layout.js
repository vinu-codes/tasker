import React from 'react'
import { NavBar } from '@components/NavBar'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 60px;
`

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}

export { Layout }
