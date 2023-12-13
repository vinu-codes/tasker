import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('should have correct text in heading', () => {
    render(<Header />)
    expect(screen.getByText(/^To Do List/)).toHaveTextContent('To Do List')
  })
  it('should contain a star icon', () => {
    render(<Header />)
    expect(screen.getByTitle(/^star/)).toBeInTheDocument()
  })
})
