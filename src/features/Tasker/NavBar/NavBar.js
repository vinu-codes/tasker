import React, { useState } from 'react'
import { MenuContainer, Button, Overlay } from './NavBar.styled'

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClose = () => {
    setIsExpanded(false)
  }

  return (
    <>
      <Button onClick={() => setIsExpanded(!isExpanded)}></Button>
      <MenuContainer isActive={isExpanded}>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </MenuContainer>
      <Overlay onClick={handleClose} isActive={isExpanded} />
    </>
  )
}

export { NavBar }
