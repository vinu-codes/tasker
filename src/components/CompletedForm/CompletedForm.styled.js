import styled from 'styled-components'

const CompletedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  border: 1px solid black;
`

export { CompletedContainer, CompletedWrapper }
