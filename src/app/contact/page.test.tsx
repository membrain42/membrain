import { render, screen } from '@testing-library/react'
import ContactPage from './page'

test('renders Contact page', () => {
  render(<ContactPage />)
  expect(screen.getByText(/contact/i)).toBeInTheDocument()
})
