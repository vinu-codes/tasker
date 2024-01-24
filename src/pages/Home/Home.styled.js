import styled from 'styled-components'

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100%;
  border: 1px solid black;
  padding: 20px;
`

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 0;
  button {
    cursor: pointer;
    user-select: none;
    border: none;
    background: none;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    margin-left: auto;
    width: 70px;
  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const List = styled.li`
  user-select: none;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  padding: 8px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
  }
  span.label {
    margin-left: 8px;
  }
  span {
    svg.CHECKBOX {
      rect {
        stroke: black;
      }
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 8px;
`
export {
  HomeWrapper,
  HomeContainer,
  HeadingContainer,
  Group,
  List,
  IconContainer,
}
