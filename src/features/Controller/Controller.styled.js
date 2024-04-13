import styled from 'styled-components'
import { media } from '@common/Theme/media'

const ControllerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 28px;
  ${media.sm`
  max-width: 480px;
  margin: 0 auto;
  margin-top: 28px;`}
  ${media.md`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  margin-top: 28px;`}
  ${media.lg`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 28px;`}
`

const ControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 0 20px 0;
  button {
    margin-top: 8px;
  }
`

export { ControllerContainer, ControllerWrapper }
