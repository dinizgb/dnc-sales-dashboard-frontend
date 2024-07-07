import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '@/components'
import { themesList } from '@/resources/themesList'
import { Theme } from '@/types'

describe('Header Component', () => {
  const renderComponent = (theme: Theme) =>
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot', () => {
        const { container } = renderComponent(theme)
        expect(container).toMatchSnapshot()
      })
    })
  })
})
