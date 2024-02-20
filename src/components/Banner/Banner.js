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

const createGreeting = (userName, customMessage = 'How can we help?') => {
  const timeAppropriateGreeting = (name) => {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 12) {
      return `Good morning ${name}.`
    } else if (hours >= 12 && hours < 17) {
      return `Good afternoon ${name}.`
    } else if (hours >= 17 && hours <= 24) {
      return `Good evening ${name}.`
    }
  }

  return `${!!userName && timeAppropriateGreeting(userName)}`
}

const Banner = () => {
  return (
    <Container>
      <h1>{createGreeting('User')}</h1>
      <h2>What's up for today?</h2>
    </Container>
  )
}

export { Banner }
