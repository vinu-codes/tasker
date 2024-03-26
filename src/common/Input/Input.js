import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import { colors } from '@common/Theme'

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`

const Container = styled.div`
  display: flex;
  span.icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 0 8px 8px 0;
  }
  .label-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  svg.ICON.EYE_OPEN {
    path {
      stroke: white;
    }
  }
  svg.ICON.EYE_CLOSE {
    path {
      stroke: white;
    }
  }
`

const InputArea = styled.input`
  outline: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding-left: 8px;
  background: transparent;
  font-size: 16px;
  color: black;
  position: absolute;
  z-index: 1111;
  &:focus {
    border: 2px solid grey;
    background: white;
  }
  &:valid {
    border: 2px solid grey;
    background: white;
  }
  &:valid + .label {
    transform: translate(-20px, -16px) scale(0.88);
    height: 30px;
    padding: 0 12px;
    margin: 0 20px;
    z-index: 1111;
    color: grey;
    display: flex;
    align-items: center;
  }
  &:focus + .label {
    transform: translate(-20px, -16px) scale(0.88);
    height: 30px;
    padding: 0 12px;
    margin: 0 20px;
    z-index: 1111;
    color: grey;
    display: flex;
    align-items: center;
  }
  ${(props) =>
    props.$hasIcon &&
    css`
      border-radius: 8px 0 0 8px;
    `}
`

const EntryArea = styled.div`
  display: flex;
  position: relative;
  height: 48px;
  width: 100%;
  line-height: 48px;
  box-sizing: border-box;
  .label {
    position: absolute;
    font-size: 16px;
    margin: 0 20px;
    transition: 0.2s ease;
    color: grey;
    background: white;
  }
`

const Input = ({ label, icon, type, children, ...props }) => {
  return (
    <Wrapper>
      <Container>
        <EntryArea>
          <InputArea type={type} $hasIcon={!!icon || !!children} {...props} />
          {type !== 'date' && !!label && <div className="label">{label}</div>}
        </EntryArea>
        {!!icon && (
          <span className="icon">
            <Icon name={icon} size={24} />
          </span>
        )}
        {!!children && children}
      </Container>
    </Wrapper>
  )
}

export { Input }
