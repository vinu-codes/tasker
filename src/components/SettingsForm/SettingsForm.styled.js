import styled, { css } from 'styled-components'

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
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
`

const Form = styled.form`
  input {
    width: 100%;
    padding: 12px 0px 12px 0px;
    margin-bottom: 8px;
  }
`
export { Group, SettingsContainer, List, Form }
