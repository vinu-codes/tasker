import React from 'react'
import styled from 'styled-components'
import { Icon } from '@common/Icon'

const NavWrapper = styled.div``

const NavBar = () => {
  return (
    <NavWrapper>
      <div>Tasker</div>
      <button>
        <Icon />
      </button>
    </NavWrapper>
  )
}

export { NavBar }
