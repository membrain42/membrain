import { render, screen } from '@testing-library/react'
import AboutPage from './page'

test('renders About page', () => {
  render(<AboutPage />)
  expect(screen.getByText(/about/i)).toBeInTheDocument()
})
