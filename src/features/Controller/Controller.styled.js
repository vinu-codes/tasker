import styled from 'styled-components'

const ControllerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 28px;
`

const ControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  border: 1px solid black;
  padding: 20px;
  button {
    margin-top: 8px;
  }
`

export { ControllerContainer, ControllerWrapper }
