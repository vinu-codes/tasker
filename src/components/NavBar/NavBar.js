import React from 'react'
import styled from 'styled-components'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'

const NavWrapper = styled.div`
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  position: fixed;
  z-index: 9999;
  border-bottom: 1px solid black;
  width: 100%;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  button.add-button {
    margin-left: 8px;
  }
  svg.CLOSE {
    transform: rotate(45deg);
  }
`

const NavBar = () => {
  return (
    <NavWrapper className="nav-wrapper">
      <div>Tasker</div>
      <ButtonsContainer className="button-container">
        <Button className="settings-button">
          settings
          <Icon />
        </Button>
        <Button className="add-button">
          <Icon name="CLOSE" />
        </Button>
      </ButtonsContainer>
    </NavWrapper>
  )
}

export { NavBar }
