import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  margin-top: 32px;
  h2 {
    font-weight: 500;
  }
`
const Title = () => {
  return (
    <TitleContainer>
      <h2>My Tasks</h2>
    </TitleContainer>
  )
}

export { Title }
