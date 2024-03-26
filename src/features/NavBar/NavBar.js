import React, { useContext } from 'react'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'
import { NavWrapper, ButtonsContainer } from './NavBar.styled'
import { NavigationContext } from '@components/Route'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '@state/auth'
import { clearState } from '@utils/localStorage'

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
        <Button onClick={handleWorkout}>Workout</Button>
        <Button onClick={handleSettings} className="settings-button">
          <Icon name="SETTINGS" />
        </Button>
        <Button onClick={handleCreate} className="add-button">
          <Icon name="CLOSE" />
        </Button>
        <Button onClick={handleSignOut} className="sign-out">
          <Icon name="SIGN_OUT" />
          Sign Out
        </Button>
      </ButtonsContainer>
    </NavWrapper>
  )
}

export { NavBar }
