import React from 'react'
import styled from 'styled-components'
import { CompletedContainer, CompletedWrapper } from './CompletedForm.styled'
import { Accordion } from '@common/Accordion'
import { Provider as AccordionWrapper } from '@common/Accordion'
import { Icon } from '@common/Icon'
import { Button } from '@common/Button'

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid grey;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  span {
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
    padding-left: 8px;
  }
  button {
    margin-left: auto;
  }
`
const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const totalSelected = (items) => {
  if (!items || !items.length) return 0
  const result = items.filter((x) => {
    return x.status === 'completed'
  })
  return result.length
}

const CompletedForm = ({ items, callback }) => {
  const total = totalSelected(items)

  const handleUndo = (id) => {
    const getSelected = items.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'incomplete' }
      } else {
        return item
      }
    })
    callback({ value: getSelected })
  }

  const renderContent = () => {
    const filterCompletedItems = items.filter(
      (item) => item.status === 'completed'
    )
    return filterCompletedItems.map((item) => (
      <List key={item.id}>
        <Icon name="TICK" size={18} />
        <span>{item.label}</span>
        <Button className="undo" onClick={() => handleUndo(item.id)}>
          <Icon name="UNDO" stroke="black" />
        </Button>
      </List>
    ))
  }

  const renderText = !!total ? `Completed: ${total}` : 'Completed:'

  return (
    !!total && (
      <CompletedWrapper>
        <AccordionWrapper>
          <Accordion title={renderText} name="completed">
            <Group>{renderContent()}</Group>
          </Accordion>
        </AccordionWrapper>
      </CompletedWrapper>
    )
  )
}

export { CompletedForm }
