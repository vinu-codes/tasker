import React from 'react'
import styled from 'styled-components'
import { Search } from '@components/Search'
import { useSelector } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'

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
  padding: 8px;
  margin-top: 8px;
`

const Home = () => {
  const items = useSelector(tasksSelector.items)

  const handleCallback = (filteredItems) => {
    console.log(filteredItems)
  }

  const renderTasks = () => {
    const result = items.map((item) => {
      return (
        <List>
          <span>{item.label}</span>
          <span>{item.details}</span>
          <span>{item.date}</span>
          <span>{item.category}</span>
        </List>
      )
    })
    return result
  }
  return (
    <HomeWrapper>
      <HomeContainer>
        <Search onSearch={handleCallback} items={items} />
        <Group>{renderTasks()}</Group>
      </HomeContainer>
    </HomeWrapper>
  )
}

export { Home }
