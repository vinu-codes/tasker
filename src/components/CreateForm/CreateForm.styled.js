import styled from 'styled-components'

const CreateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  border: 1px solid black;
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
  input.detail {
    padding-bottom: 46px;
  }
`
export { CreateContainer, CreateWrapper, FormContainer }
