import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Input } from '@common/Input'

const SearchContainer = styled.div``

const filteredItems = (value, items) => {
  if (!items || !items.length) return
  const result = items.filter((item) => {
    return item.label.toLowerCase().includes(value.toLowerCase())
  })
  return result
}

const Search = ({ items, callback }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    callback({ value: filteredItems(value, items) })
  }, [items])

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)

    callback({ value: filteredItems(value, items) })
  }

  return (
    <SearchContainer>
      <Input
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
        label="Search"
        required
      />
    </SearchContainer>
  )
}

export { Search }
