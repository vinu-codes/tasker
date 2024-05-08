import React, { useContext } from 'react'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { NavWrapper, ButtonsContainer, Controls } from './NavBar.styled'
import { NavigationContext } from '@components/Route'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '@state/auth'
import { clearState } from '@utils/localStorage'
import { Modal } from '@common/Modal'

const NavBar = () => {
  const dispatch = useDispatch()
  const [currentPath, navigate] = useContext(NavigationContext)

  const handleSignOut = () => {
    dispatch(signOutUser())
    clearState('uid')
  }

  const handleSettings = () => {
    navigate('/settings')
  }

  const handleCreate = () => {
    navigate('/create')
  }
  const handleWorkout = () => {
    navigate('/workout')
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
        <Button onClick={handleSettings} className="default-button">
          <Icon stroke="white" name="SETTINGS" />
        </Button>
        <Button onClick={handleCreate} className="default-button">
          <Icon stroke="white" name="CLOSE" />
        </Button>
        <Button onClick={handleSignOut} className="default-button">
          <Icon stroke="white" name="SIGN_OUT" />
        </Button>
      </ButtonsContainer>
    </NavWrapper>
  )
}

export { NavBar }
