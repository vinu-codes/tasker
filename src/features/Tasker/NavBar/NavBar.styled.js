import styled, { css } from 'styled-components'

const MenuContainer = styled.div`
  width: 240px;
  height: 100%;
  background: white;
  display: flex;
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 2;
  transition: all 300ms ease-in-out;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    margin-left: 24px;
    margin-top: 104px;
  }
  li {
    padding: 8px;
  }
  ${(props) =>
    props.isActive &&
    css`
      left: 0;
    `}
`
const Button = styled.button`
  border: none;
  background: none;
  position: absolute;
  z-index: 3;
  margin-left: 24px;
  height: 30px;
  width: 30px;
  border-bottom: 2px solid rgb(217 217 217);
  &:before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    background: rgb(217 217 217);
  }
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(217 217 217);
  }
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: -100%;
  ${(props) =>
    props.isActive &&
    css`
      left: 0;
    `}
`
export { MenuContainer, Button, Overlay }
