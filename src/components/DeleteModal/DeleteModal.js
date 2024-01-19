import React, { useState } from 'react'

import styled from 'styled-components'
import { Button } from '@common/Button'
import { Dropdown } from '@common/Dropdown'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    width: 100%;
    margin: 0;
  }
  button.cancel {
    background: green;
    color: white;
  }
  button.delete {
    background: red;
    color: white;
  }
`

const DeleteModal = ({ callback }) => {
  return (
    <ButtonContainer>
      <h4>Are you sure you want to delete these items?</h4>
      <Button
        onClick={() => callback({ name: 'cancel', value: 'cancel' })}
        className="cancel"
      >
        cancel
      </Button>
      <Button
        onClick={() => callback({ name: 'delete', value: 'delete' })}
        className="delete"
      >
        delete
      </Button>
    </ButtonContainer>
  )
}
const EditCategory = ({ callback, categories }) => {
  const [state, setState] = useState(categories)

  return (
    <ButtonContainer>
      <h4>Which category would you like to move these items to?</h4>
      <Dropdown
        isMulti={false}
        name="category"
        options={state}
        callback={({ value }) => {
          setState(value)
        }}
      />
      <Button
        onClick={() => callback({ name: 'cancel', value: 'cancel' })}
        className="cancel"
      >
        cancel
      </Button>
      <Button
        onClick={() => {
          const result = state.find((k) => !!k.active)
          if (!!result) {
            callback({ name: 'change', value: result.value })
          }
        }}
        className="delete"
      >
        Save
      </Button>
    </ButtonContainer>
  )
}

export { DeleteModal, EditCategory }
