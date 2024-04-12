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
  width: 980px;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 0 20px 0;
  button {
    margin-top: 8px;
  }
`

export { ControllerContainer, ControllerWrapper }
