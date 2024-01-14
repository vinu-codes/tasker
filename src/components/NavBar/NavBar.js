import React, { useContext } from 'react'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { NavWrapper, ButtonsContainer } from './NavBar.styled'
import { NavigationContext } from '@components/Route'

const NavBar = () => {
  const [_, navigate] = useContext(NavigationContext)

  const handleSettings = () => {
    navigate('/settings')
  }

  const handleCreate = () => {
    navigate('/create')
  }
  return (
    <NavWrapper className="nav-wrapper">
      <div>Tasker</div>
      <ButtonsContainer className="button-container">
        <Button onClick={handleSettings} className="settings-button">
          settings
          <Icon />
        </Button>
        <Button onClick={handleCreate} className="add-button">
          <Icon name="CLOSE" />
        </Button>
      </ButtonsContainer>
    </NavWrapper>
  )
}

export { NavBar }
