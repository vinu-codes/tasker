import React from 'react'
import image from './checkmark.jpg'
import styled from 'styled-components'
import { colors } from '@common/Theme'

const Outer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`

const Right = styled.div`
  width: 100px;
  height: 200px;
  overflow: hidden;
  position: absolute;
  top: 0;
`

const Left = styled.div``
const Container = styled.div`
  display: flex;
  align-items: center;
  span {
    line-height: 40px;
    font-size: 36px;
    font-weight: bold;
    color: #c3392c;
  }
`

const Logo = () => {
  return (
    <Outer>
      <Right></Right>
      <Left></Left>
      <Container>
        <span className="check-mask">Tasker</span>
        <img src={image} width="40px" height="40px"></img>
      </Container>
    </Outer>
  )
}

export { Logo }
