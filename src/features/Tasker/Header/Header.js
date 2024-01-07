import React from 'react'
import styled from 'styled-components'
import Icon from '@common/Icon'

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  svg {
    margin-left: auto;
    margin-right: 20px;
    min-width: 20px;
    min-height: 20px;
  }
  h2 {
    color: rgb(217 217 217);
    font-size: 20px;
    padding: 0;
    margin: 0;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Header = () => (
  <HeaderContainer className="header">
    <h2>Tasker</h2>
  </HeaderContainer>
)

export { Header }
