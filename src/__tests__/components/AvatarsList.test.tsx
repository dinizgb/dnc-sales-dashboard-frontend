import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { AvatarsList } from '@/components'
import { themesList } from '@/resources/themesList'
import { Theme } from '@/types'

const mockListData = [
  {
    avatar: '/dnc-avatar.jpg',
    name: 'Nome Sobrenome 1',
    subtitle: 'R$ 1.000,00',
  },
  {
    avatar: '/dnc-avatar.jpg',
    name: 'Nome Sobrenome 2',
    subtitle: 'R$ 1.000,00',
  },
  {
    avatar: '/dnc-avatar.jpg',
    name: 'Nome Sobrenome 3',
    subtitle: 'R$ 1.000,00',
  },
]

describe('AvatarsList Component', () => {
  const renderComponent = (theme: Theme) =>
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <AvatarsList listData={mockListData} />
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
