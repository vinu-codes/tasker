import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0;
    text-align: center;
    padding-top: 24px;
  }
  h2 {
    margin: 0;
    padding-top: 12px;
    padding-bottom: 18px;
    text-align: center;
  }
`

const Banner = () => {
  return (
    <Container>
      <h1>Good morning [User]!</h1>
      <h2>What's up for today?</h2>
    </Container>
  )
}

export { Banner }
