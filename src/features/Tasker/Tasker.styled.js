import styled, { css } from 'styled-components'

const AppContainer = styled.div`
  width: 1000px;
  height: 800px;
  background: rgb(254 254 254);
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 24px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  padding-top: 32px;
  z-index: 2;
`

const Content = styled.div`
  padding: 24px;
  height: 160px;
  margin-top: 32px;
  display: block;
`
// rgb(166 150 200) - change to lilac when selected
const List = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 3px solid rgb(246 246 246);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  span {
    margin-left: 16px;
    font-weight: 300;
    ${(props) =>
      props.isActive &&
      css`
        color: rgb(166 150 200);
      `}
  }
`

const TickContainer = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background: rgb(166 150 200);
    `}
`

const StarContainer = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  &:hover {
    svg path {
      stroke: rgb(166 150 200);
    }
  }
  svg path {
    ${(props) =>
      props.isFav &&
      css`
        fill: rgb(166 150 200);
      `}
  }
`
const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  height: calc(844px - 250px);
  overflow-y: auto;
  padding-bottom: 50px;
  padding-left: 24px;
  padding-right: 24px;
`
//56px - 28.5px - 24px - 20px - 32px

const InputContainer = styled.div`
  input {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: rgb(245 245 245);
    outline: none;
    border: none;
    transition: border 0.3s ease-in;
    &:hover {
      border: 2px solid pink;
      outline: none;
    }
    &:focus {
      border: 2px solid pink;
      outline: none;
    }
  }
`
// ask about margin-left: how to fix this?

const BackgroundTriangle = styled.div`
  width: calc(100% * 2);
  height: 80%;
  background: pink;
  position: absolute;
  left: calc(-50% - 100px);
  top: calc(50% + 250px);
  z-index: 1;
  transform: rotate(30deg);
  box-shadow: 0px -100px 0px 0px pink;
  filter: blur(2px);
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f2f0f9;
`

const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
`

const DeleteContainer = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    svg {
      fill: black;
    }
  }
  svg {
    width: 18px;
    height: 18px;
    fill: rgb(173, 171, 188);
  }
`

export {
  AppContainer,
  Content,
  List,
  TickContainer,
  StarContainer,
  Group,
  InputContainer,
  BackgroundTriangle,
  Wrapper,
  IconContainer,
  DeleteContainer,
}
