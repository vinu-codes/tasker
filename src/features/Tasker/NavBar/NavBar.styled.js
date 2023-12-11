import styled, { css } from "styled-components"

// Step 1: Container
// Step 2: Group
// Step 3: Button

// border-top-

const Container = styled.div`
  height: 100%;
  width: 350px;
  background: white;
  position: absolute;
  top: 0;
  left: -100%;
  transition: all 300ms ease-in-out;
  box-shadow: 0px -1px 7px 3px rgba(0, 0, 0, 0.16);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
  padding-left: 24px;
  padding-top: 24px;
  ${(props) =>
    props.isActive &&
    css`
      left: 0;
    `}
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    margin-top: 48px;
  }

  li {
    width: 100%;
    display: flex;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`
const Button = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 32px;
  border-bottom: 2px solid black;
  cursor: pointer;
  position: absolute;
  left: 24px;
  top: 24px;
  z-index: 3;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    top: 0;
    left: 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50%);
    left: 0;
    width: 100%;
    height: 2px;
    background: black;
  }
`

const Overflow = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;
  top: 0;
  ${(props) =>
    props.isActive &&
    css`
      left: 0;
    `}
`
export { Container, Button, Overflow }
