import React from 'react'
import { CompletedContainer, CompletedWrapper } from './CompletedForm.styled'
import { Dropdown } from '@common/Dropdown'

const CompletedForm = () => {
  return (
    <CompletedWrapper>
      <CompletedContainer>
        <div>
          <span>Done</span>
        </div>
      </CompletedContainer>
    </CompletedWrapper>
  )
}

export { CompletedForm }
