import styled from 'styled-components'
import { colors } from '@common/Theme'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border: 2px solid black;
  padding: 20px;

  h3 {
    padding: 0;
    margin: 0;
    padding-bottom: 16px;
    font-weight: normal;
  }
  button {
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

export { FormContainer, InputContainer }
