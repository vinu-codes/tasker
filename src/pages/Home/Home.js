import React, { useState } from 'react'
import styled from 'styled-components'
import { Search } from '@components/Search'
import { useSelector } from 'react-redux'
import { tasksSelector } from '@state/tasks/selectors'
import { categorySelector } from '@state/category/selectors'

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

const createDataStructure = (categories, items) => {
  const result = categories.reduce((prev, curr) => {
    console.log({ curr })
    return {
      ...prev,
      [curr.value]: {
        label: curr.value,
        items: items.filter((k) => {
          return k.category === curr.value
        }),
      },
    }
  }, {})
  return result
}

const Home = () => {
  const items = useSelector(tasksSelector.items)
  const categories = useSelector(categorySelector.categories)
  const [filteredItems, setFilteredItems] = useState(items)

  const data = createDataStructure(categories, items)
  console.log(data)

  const handleCallback = ({ value }) => {
    console.log(value)
    setFilteredItems(value)
  }

  const renderCategory = (data) => {
    const result = Object.values(data)
    return result.map((item) => (
      <div>
        <span>{item.label}</span>
        {renderTasks(item.items)}
      </div>
    ))
  }

  const renderTasks = (items) => {
    if (!items || !items.length) return null
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
        <Search callback={handleCallback} items={items} name="search" />
        {renderCategory(data)}
      </HomeContainer>
    </HomeWrapper>
  )
}

export { Home }

//  <Group>{renderTasks(filteredItems)}</Group>
