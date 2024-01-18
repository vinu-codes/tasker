import React, { useState } from 'react'
import styled from 'styled-components'
import { Search } from '@components/Search'
import { Controller } from '@features/Controller'
import { useSelector } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { categorySelector } from '@state/category/selectors'
import { Icon } from '@common/Icon'

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
  display: flex;
  align-items: center;
  span.circle {
    display: inline-block;
    background: red;
    min-width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`

const createDataStructure = (items, categories) => {
  const result = {}
  return result
}

const Home = () => {
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)
  const [filteredItems, setFilteredItems] = useState(items)

  const data = createDataStructure(items, categories)

  const handleCallback = ({ value }) => {
    setFilteredItems(value)
  }

  const renderTasks = (items) => {
    if (!items || !items.length) return null
    const result = items.map((item) => {
      return (
        <List>
          <span className="circle"></span>
          <span>{item.label}</span>
          <span>{item.details}</span>
          <span>{item.date}</span>
          <span>{item.category}</span>
          <IconContainer>
            <Icon name="EXPAND" />
          </IconContainer>
        </List>
      )
    })
    return result
  }
  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <Search name="search" items={items} callback={handleCallback} />
          {renderTasks(filteredItems)}
        </HomeContainer>
      </HomeWrapper>
      <Controller />
    </>
  )
}

export { Home }
