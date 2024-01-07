import React, { useState } from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import { Title } from './Title'
import { Header } from './Header'
import { useDispatch, useSelector } from 'react-redux'
import {
  updatedList,
  updatedFavouriteList,
  generateRandom,
  deleteSelectedItem,
} from './utils'
import Icon from '@common/Icon'
import {
  AppContainer,
  Content,
  List,
  TickContainer,
  StarContainer,
  Group,
  InputContainer,
  BackgroundTriangle,
  Wrapper,
  IconContainer,
  DeleteContainer,
} from './Tasker.styled'
import {
  addItem,
  authSelector,
  setFavItem,
  setActiveItem,
  deleteItem,
} from '@state/auth'

const Tasker = () => {
  const dispatch = useDispatch()
  const options = useSelector(authSelector.items)

  const [value, setValue] = useState('')

  const handleFavourite = (item) => {
    const payload = updatedFavouriteList(options, item)

    dispatch(setFavItem(payload))
  }

  const handleSelect = (itemSelected) => {
    const payload = updatedList(options, itemSelected)

    dispatch(setActiveItem(payload))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = [
      ...options,
      { label: value, id: generateRandom(), active: false, favourite: false },
    ]
    dispatch(addItem(payload))
    setValue('')
  }

  const handleDelete = (item) => {
    console.log(item)
    const payload = deleteSelectedItem(options, item.id)
    dispatch(deleteItem(payload))
  }

  const renderList = () => {
    const result = options.map((item) => {
      return (
        <List key={item.id} isActive={item.active}>
          <TickContainer
            isActive={item.active}
            onClick={() => handleSelect(item)}
          >
            <Icon name="CHECKTICK" />
          </TickContainer>
          <span>{item.label}</span>
          <IconContainer>
            <DeleteContainer
              isActive={item.active}
              onClick={() => handleDelete(item)}
            >
              <Icon name="DELETE" />
            </DeleteContainer>
            <StarContainer
              isFav={item.favorite}
              onClick={() => handleFavourite(item)}
            >
              <Icon name="STAR" />
            </StarContainer>
          </IconContainer>
        </List>
      )
    })
    return <Group>{result}</Group>
  }

  return (
    <Wrapper>
      <AppContainer className="app">
        <NavBar />
        <Header className="header" />
        <Content className="content">
          <Title />
          <InputContainer>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Add item..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </InputContainer>
        </Content>
        {renderList()}
      </AppContainer>
      <BackgroundTriangle />
    </Wrapper>
  )
}

export default Tasker
