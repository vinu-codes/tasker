import styled from 'styled-components'
import { colors } from '@common/Theme'

const NavWrapper = styled.div`
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  position: fixed;
  z-index: 9999;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  background: ${colors.rust};
  div.tasker-button {
    button.home {
      border: none;
      padding: 0;
      background: none;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      color: white;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 8px;
  button.add-button {
    margin-left: 8px;
  }
  svg.CLOSE {
    transform: rotate(45deg);
  }
  button.sign-out {
    margin-left: 8px;
    color: rgb(169, 174, 185);
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: 8px;
  }
`

export { NavWrapper, ButtonsContainer, Controls }
