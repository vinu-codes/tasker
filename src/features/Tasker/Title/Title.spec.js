import { render, screen } from '@testing-library/react'
import { Title } from './Title'

// .toHaveTextContent('My Tasks') assertion

describe('Title shows default value', () => {
  it('should match content of component', () => {
    render(<Title />)
    expect(screen.getByText(/^My Tasks/)).toHaveTextContent('My Tasks')
  })
})
