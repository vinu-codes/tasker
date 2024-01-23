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
  max-width: 480px;
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
  span.circle {
    display: inline-block;
    background: grey;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    &.active {
      background: red;
      transform: scale(1.2);
    }
  }
  &:hover {
    span.circle {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
`
export {
  HomeWrapper,
  HomeContainer,
  HeadingContainer,
  Group,
  List,
  IconContainer,
}