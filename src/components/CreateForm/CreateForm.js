import React from 'react'
import styled from 'styled-components'
import { Button } from '@common/Button'
import { Input } from '@common/Input'

const CreateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  max-width: 480px;
  width: 100%;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  button {
    margin-top: 8px;
  }
  input {
    padding: 8px;
    margin-bottom: 8px;
  }
`

const CreateForm = () => {
  return (
    <CreateWrapper className="create-wrapper">
      <CreateContainer>
        <FormContainer>
          <h3>Create Task</h3>
          <Input name="task" placeholder="task name" className="name" />
          <Input
            name="date"
            type="date"
            placeholder="due date"
            className="date"
          />
          <Input
            name="details"
            placeholder="details of task"
            className="detail"
          />
          <Button className="save-button">Save</Button>
          <Button className="cancel-button">Cancel</Button>
        </FormContainer>
      </CreateContainer>
    </CreateWrapper>
  )
}

export { CreateForm }
