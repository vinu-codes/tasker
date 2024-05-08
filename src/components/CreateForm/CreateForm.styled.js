import styled from 'styled-components'
import { media } from '@common/Theme/media'

const CreateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.sm`
  max-width: 480px;
  margin: 0 auto;`}
  ${media.md`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;`}
  ${media.lg`
  max-width: 1024px;
  margin: 0 auto;`}
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
    background: black;
    border-radius: 8px 8px 0 0;
    h3 {
      font-weight: normal;
      color: white;
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
