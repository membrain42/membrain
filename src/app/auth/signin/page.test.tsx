import { render, screen } from '@testing-library/react'
import SignInPage from './page'

test('renders signin page heading', () => {
  render(<SignInPage />)
  expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
})
