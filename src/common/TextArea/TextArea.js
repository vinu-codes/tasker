import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'

const TextAreaContainer = styled.textarea`
  outline: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
  border-radius: 8px;
  width: 100%;
  line-height: 21px;
  padding: 8px;
  ${(props) =>
    props.hasIcon &&
    css`
      border-radius: 8px 0 0 8px;
    `}
`

const Container = styled.div`
  display: flex;
  margin-bottom: 8px;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    span.label {
      margin-bottom: 8px;
    }
  }
`
const InputContainer = styled.div`
  display: flex;
  span.icon {
    width: 48px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 8px;
    justify-content: center;
    background: black;
    border-radius: 0 8px 8px 0;
  }
`

const TextArea = ({ label, icon, ...props }) => {
  return (
    <Container>
      <label>
        <span className="label">{label}</span>
        <InputContainer>
          <TextAreaContainer hasIcon={!!icon} {...props} />
          {!!icon && (
            <span className="icon">
              <Icon name={icon} size={32} />
            </span>
          )}
        </InputContainer>
      </label>
    </Container>
  )
}

export { TextArea }
