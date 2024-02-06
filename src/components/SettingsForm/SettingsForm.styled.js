import styled, { css } from 'styled-components'

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  padding: 20px;
  h3 {
    padding: 0;
    margin: 0;
  }

  h4 {
    padding: 0;
    margin: 0;
    padding: 12px 0 12px 0;
  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
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
  justify-content: flex-start;
  button {
    &:nth-child(2) {
      margin-left: 8px;
    }
  }
`

const Form = styled.form``

export { Group, SettingsContainer, List, Form, Controls }
