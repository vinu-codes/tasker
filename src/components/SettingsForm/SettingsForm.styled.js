import styled, { css } from 'styled-components'
import { media } from '@common/Theme/media'

const SettingsWrapper = styled.div`
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
  max-width: 1024px;`}
`

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0 20px 0 20px;
  margin-bottom: 18px;
  h4 {
    padding: 0;
  }
`

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  padding: 8px 16px 8px 16px;
  align-items: center;
  span.label {
    &:first-letter {
      text-transform: uppercase;
    }
  }
  span.color {
    background: ${(props) => props.color};
  }
  button {
    margin-left: auto;
  }
`

const Controls = styled.div`
  display: flex;
  gap: 8px;
  width: 25%;
  margin-left: auto;
`

const Form = styled.form`
  padding: 0 20px 20px 20px;
`

export { Group, SettingsContainer, List, Form, Controls, SettingsWrapper }
