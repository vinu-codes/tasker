import React, { useContext } from 'react'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { NavWrapper, ButtonsContainer } from './NavBar.styled'
import { NavigationContext } from '@components/Route'

const NavBar = () => {
  const [currentPath, navigate] = useContext(NavigationContext)

  const handleSettings = () => {
    navigate('/settings')
  }

  const handleCreate = () => {
    navigate('/create')
  }

  if (currentPath === '/login') {
    return null
  }

  return (
    <NavWrapper className="nav-wrapper">
      <div className="tasker-button">
        <button className="home" onClick={() => navigate('/')}>
          Tasker
        </button>
      </div>
      <ButtonsContainer className="button-container">
        <Button onClick={handleSettings} className="settings-button">
          <Icon name="SETTINGS" />
        </Button>
        <Button onClick={handleCreate} className="add-button">
          <Icon name="CLOSE" />
        </Button>
      </ButtonsContainer>
    </NavWrapper>
  )
}

export { NavBar }
