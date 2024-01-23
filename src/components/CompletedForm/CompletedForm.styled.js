import styled from 'styled-components'

const CompletedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
`

const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  border: 1px solid black;
`

export { CompletedContainer, CompletedWrapper }
