import styled from 'styled-components'
import { colors } from '@common/Theme'

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .sign-in {
    margin-top: 26px;
  }
`
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

export { FormWrapper, FormContainer }
