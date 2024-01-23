import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'

const InputContainer = styled.input`
  outline: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding-left: 8px;
  ${(props) =>
    props.hasIcon &&
    css`
      border-radius: 8px 0 0 8px;
    `}
`

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    span.label {
      margin-bottom: 8px;
    }
    span.icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: black;
      border-radius: 0 8px 8px 0;
    }
  }
`

const InputWrapper = styled.div`
  display: flex;
`

const Input = ({ label, icon, ...props }) => {
  return (
    <Container>
      <label>
        <span className="label">{label}</span>
        <InputWrapper>
          <InputContainer hasIcon={!!icon} {...props} />
          {!!icon && (
            <span className="icon">
              <Icon name={icon} size={32} />
            </span>
          )}
        </InputWrapper>
      </label>
    </Container>
  )
}

export { Input }
