import React, { useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'

const lights = [
  { color: 'red', delay: 0.1 },
  { color: 'blue', delay: 0.3 },
  { color: 'green', delay: 0.2 },
  { color: 'orange', delay: 0.3 },
  { color: 'purple', delay: 0.1 },
]

const sparkle = () => keyframes`
  0% {
    box-shadow: -1px 0px 2px 0px rgba(255,255,255,0.75);
    background: red;
  }
 100%{
    box-shadow: -1px 1px 19px 0px rgba(255,255,255,0.75);
  }`

const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`
const Circle = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffb86b;
  margin-left: 32px;
  position: relative;
  z-index: 1;
  animation-name: ${sparkle};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  ${(props) =>
    props.delay &&
    css`
      animation-delay: ${props.delay}s;
    `};
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `};
  &:nth-child(1) {
    margin-left: 0;
  }
  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    ${(props) =>
      props.color &&
      css`
        background: transparent;
        background: radial-gradient(
          circle,
          ${props.color} 0%,
          rgba(221, 221, 226, 0.675529586834734) 67%,
          rgba(255, 255, 255, 0) 90%,
          rgba(255, 255, 255, 0) 100%
        );
      `};
    top: 2px;
    left: 2px;
    z-index: 444;
  }
  &:after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 0px;
    background: #c4c4c4;
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`

const Lights = () => {
  useEffect(() => {
    const getBody = document.querySelector('body')
    getBody.style.backgroundColor = 'black'
  }, [])

  const renderCircles = () => {
    const result = lights.map((item) => {
      return <Circle color={item.color} delay={item.delay}></Circle>
    })
    return result
  }
  return <Group>{renderCircles()}</Group>
}

export { Lights }
