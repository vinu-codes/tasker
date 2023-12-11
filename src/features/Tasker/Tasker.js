import React, { useState } from 'react'
import { NavBar } from './NavBar'
import {
  AppContainer,
  Box,
  List,
  Group,
  InputContainer,
  HeaderContainer,
  TitleContainer,
} from './Tasker.styled'

const Tasker = () => {
  const [state, setState] = useState([
    { label: 'Chocolate', id: 1, checked: false, favourite: false },
    { label: 'Peanut Butter', id: 2, checked: false, favourite: false },
  ])

  return <Component options={state} callback={() => {}} />
}

const Title = () => {
  return (
    <TitleContainer>
      <h2>Groceries</h2>
    </TitleContainer>
  )
}

const Header = () => {
  return (
    <HeaderContainer>
      <h1>To Do List</h1>
    </HeaderContainer>
  )
}

const Component = ({ options, callback }) => {
  const renderList = () => {
    const result = options.map((item) => {
      return <List key={item.id}>{item.label}</List>
    })
    return <Group>{result}</Group>
  }

  return (
    <AppContainer>
      <NavBar />
      <Header />
      <Title />
      <InputContainer>
        <input />
      </InputContainer>
      {renderList()}
    </AppContainer>
  )
}

export default Tasker
