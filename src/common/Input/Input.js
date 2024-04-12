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
  &:focus {
    border: 2px solid grey;
    background: white;
  }
  ${(props) =>
    props.$hasIcon &&
    css`
      border-radius: 8px 0 0 8px;
    `}
`

const EntryArea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

const Label = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: normal;
  transition: 0.2s ease;
  color: grey;
  margin-bottom: 8px;
`

const Input = ({ label, icon, type, children, ...props }) => {
  return (
    <Wrapper>
      <Container>
        <EntryArea>
          {!!label && <Label className="label">{label}</Label>}
          <InputArea type={type} $hasIcon={!!icon || !!children} {...props} />
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
