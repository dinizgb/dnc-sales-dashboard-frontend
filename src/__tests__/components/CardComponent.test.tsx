import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { CardComponent } from '@/components'
import { themesList } from '@/resources/themesList'
import { Theme } from '@/types'

describe('CardComponent', () => {
  const renderComponent = (theme: Theme, className?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <CardComponent className={className} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot without any class', () => {
        const { asFragment } = renderComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with the alert class', () => {
        const { asFragment } = renderComponent(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with the success class', () => {
        const { asFragment } = renderComponent(theme, 'success')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with the warning class', () => {
        const { asFragment } = renderComponent(theme, 'warning')
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
