import React, { useState } from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import { Title } from './Title'
import { Header } from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem, addItem, setFavItem, deleteItem } from '../../store'
import { updatedList, updatedFavouriteList, generateRandom } from './utils'
import Icon from '@common/Icon'
import { Chip } from '@common/Chip'
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
} from './Tasker.styled'

const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
`

const DeleteContainer = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    svg {
      fill: black;
    }
  }
  svg {
    width: 18px;
    height: 18px;
    fill: rgb(173, 171, 188);
  }
`

const deleteSelectedItem = (options, itemId) => {
  const result = options.filter((item) => {
    return item.id !== itemId
  })
  return result
}

const Tasker = () => {
  const dispatch = useDispatch()
  const { items: options } = useSelector((state) => {
    return state.item
  })

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
