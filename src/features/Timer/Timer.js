import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { colors } from '@common/Theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  margin-top: 20px;
  padding: 20px;
  h1 {
    margin: 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 10px;
  button {
    background-color: ${colors.rust};
    color: white;
    border: 1px solid ${colors.rust};
  }
`

const Time = styled.div`
  padding-top: 16px;
  span {
    font-size: 31px;
  }
`

const Timer = () => {
  const [time, setTime] = useState(25 * 60) // 25 minutes * 60 seconds
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setTime((time) => time - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const convertToMinutes = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  return (
    <Container>
      <h1>Pomodoro Timer</h1>
      <Time>
        <span>{convertToMinutes(time)}</span>
      </Time>
      <ButtonContainer>
        <Button onClick={() => setTime(1500)}>Reset</Button>
        <Button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export { Timer }
