import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const snowAnimation = () => {
  return keyframes`
  0%{
    transform: translateY(0%) rotate(0deg);
  }
  100%{
    transform: translateY(100%) rotate(360deg);
  }`
}

const TreeContainer = styled.div`
  position: relative;
  top: 200px;
  left: 50%;
  max-width: 200px;
  z-index: 90;
`

const TreeTop = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: calc(100% + 100px);
  width: 0;
  height: 0;
  border-top: 0px;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid #3c6a3d;
  z-index: 36;
  &:before {
    content: '';
    position: absolute;
    top: 37px;
    left: 26px;
    border-radius: 50%;
    background: red;
    width: 5px;
    height: 10px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 35px;
    right: 24px;
    border-radius: 50%;
    background: red;
    width: 5px;
    height: 10px;
  }
`

const TreeMiddle = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: calc(100% + 50px);
  width: 0;
  height: 0;
  border-top: 0px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 70px solid #2a632a;
  z-index: 4;
  &:before {
    content: '';
    position: absolute;
    top: 57px;
    left: 46px;
    border-radius: 50%;
    background: red;
    width: 5px;
    height: 10px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 57px;
    right: 46px;
    border-radius: 50%;
    background: red;
    width: 5px;
    height: 10px;
  }
`

const TreeBottom = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-top: 0px;
  z-index: 3;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 90px solid #1b411b;
  &:before {
    content: '';
    position: absolute;
    top: 87px;
    left: 66px;
    border-radius: 50%;
    background: red;
    width: 5px;
    height: 10px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 87px;
    right: 66px;
    border-radius: 50%;
    background: red;
    width: 5px;
    height: 10px;
  }
`

const TreeTrunk = styled.div`
  position: absolute;
  bottom: 0;
  background: #782b1c;
  border-radius: 2px;
  width: 30px;
  height: 30px;
`

const Star = styled.div`
  background: yellow;
  top: calc(100% - 190px);
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  display: inline-block;
  height: 26px;
  width: 26px;
`

const SnowGroup = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100vw;
  margin-top: 10px;
`

const Snow = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: white;
  margin-left: 18px;
  animation-name: ${snowAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  &:nth-child(1) {
    margin: 0;
  }
`

const Tree = () => {
  const snow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const renderSnow = () => {
    const result = snow.map((index) => {
      return <Snow key={index}></Snow>
    })
    return result
  }
  return (
    <div>
      <SnowGroup className="snow-container">{renderSnow()}</SnowGroup>
      <SnowGroup className="snow-container">{renderSnow()}</SnowGroup>
      <SnowGroup className="snow-container">{renderSnow()}</SnowGroup>
      <TreeContainer className="tree">
        <TreeTrunk>
          <Star />
          <TreeTop />
          <TreeMiddle className="middle" />
          <TreeBottom className="bottom" />
        </TreeTrunk>
      </TreeContainer>
    </div>
  )
}

export { Tree }
