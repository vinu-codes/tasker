import styled, { css } from 'styled-components'
import beach from './assets/beach.png'

const AppContainer = styled.div`
  width: 390px;
  height: 844px;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  background: pink;
  z-index: 1;
  /* &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: -1;

    background-size: cover;
    background-image: url(${beach});
    background-repeat: no-repeat;
  } */
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  div {
    padding: 20px;
    text-align: center;
    color: white;
    font-weight: 600;
    border: 2px solid white;
    &:nth-child(1) {
      width: 100%;
    }
  }

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}
`

const List = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  margin-bottom: 8px;
  padding: 10px;
`

const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`

const InputContainer = styled.div`
  input {
    width: 100%;
    padding: 10px;
  }
`

const HeaderContainer = styled.div`
  height: 32px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  h1 {
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
  }
`

const TitleContainer = styled.div`
  margin-top: 48px;
`

export {
  AppContainer,
  Box,
  List,
  Group,
  InputContainer,
  HeaderContainer,
  TitleContainer,
}
