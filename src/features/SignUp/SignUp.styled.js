import styled from 'styled-components'
import { colors } from '@common/Theme'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  min-height: 600px;
  border: 2px solid black;
  padding: 20px;

  h3 {
    padding: 0;
    margin: 0;
    padding-bottom: 16px;
    font-weight: normal;
  }
  button.submit {
    user-select: none;
    margin-top: 8px;
    background: ${colors.rust};
    color: ${colors.white};
    font-weight: normal;
    border: 1px solid ${colors.rust};
    &:hover {
      background: #c3392c;
      color: white;
      border: 1px solid #c3392c;
    }
  }
  .redirect {
    cursor: pointer;
    border: none;
    background: white;
    color: ${colors.rust};
    text-decoration: underline;
  }
`

const InputContainer = styled.div`
  display: flex;
  .icon {
    width: 20px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${colors.lightGrey};
  margin-top: 16px;
  span {
    user-select: none;
    display: inline-block;
    padding-top: 12px;
  }
  button {
    padding-top: 12px;
  }
`

export { FormContainer, InputContainer, SignInContainer }
