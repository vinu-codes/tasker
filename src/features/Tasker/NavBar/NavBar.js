import React, { useState } from 'react'
import { Container, Button, Overflow } from './NavBar.styled'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}></Button>
      <Container isActive={isActive}>
        <ul>
          <li>
            <span>home</span>
          </li>
          <li>
            <span>task manager</span>
          </li>
        </ul>
      </Container>
      <Overflow isActive={isActive} />
    </>
  )
}

export { NavBar }
