import React from 'react'
import styled from 'styled-components'
import { CompletedContainer, CompletedWrapper } from './CompletedForm.styled'
import { Accordion } from '@common/Accordion'
import { Provider as AccordionWrapper } from '@common/Accordion'
import { Icon } from '@common/Icon'

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
  }
  svg {
    margin-right: 8px;
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

const CompletedForm = ({ items }) => {
  const total = totalSelected(items)

  const renderContent = () => {
    const filterCompletedItems = items.filter(
      (item) => item.status === 'completed'
    )
    return filterCompletedItems.map((item) => (
      <List key={item.id}>
        <Icon name="CHECKBOX_FILLED" />
        <span>{item.label}</span>
        <span>{item.date}</span>
      </List>
    ))
  }

  const renderText = !!total ? `Completed: ${total}` : 'Completed:'

  return (
    !!total && (
      <CompletedWrapper>
        <CompletedContainer>
          <AccordionWrapper>
            <Accordion title={renderText} name="completed">
              <Group>{renderContent()}</Group>
            </Accordion>
          </AccordionWrapper>
        </CompletedContainer>
      </CompletedWrapper>
    )
  )
}

export { CompletedForm }
