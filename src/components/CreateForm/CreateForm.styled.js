import styled from 'styled-components'
import { media } from '@common/Theme/media'

const CreateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CreateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.2);
  div.header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    background: rgb(174, 174, 174);
    border-radius: 8px 8px 0 0;
    h3 {
      font-weight: normal;
    }
  }
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  button {
    margin-top: 8px;
  }
  input {
    padding: 8px;
    margin-bottom: 8px;
  }
`
export { CreateContainer, CreateWrapper, FormContainer }
