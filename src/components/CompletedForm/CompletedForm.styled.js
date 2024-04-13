import styled from 'styled-components'
import { media } from '@common/Theme/media'

const CompletedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.sm`
  max-width: 480px;
  margin: 0 auto;
  margin-top: 12px;`}
  ${media.md`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  margin-top: 12px;`}
  ${media.lg`
  max-width: 1024px;
  margin-top: 12px;`}
`

const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.2);
`

export { CompletedContainer, CompletedWrapper }
