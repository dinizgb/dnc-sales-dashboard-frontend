import { render } from '@testing-library/react'
import { StyledButton } from '@/components'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('StyledButton Component', () => {
  const renderComponent = (theme: Theme, className: string, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledButton className={className} {...props} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot with the alert class', () => {
        const { asFragment } = renderComponent(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with the primary class', () => {
        const { asFragment } = renderComponent(theme, 'primary')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with the borderless-alert class', () => {
        const { asFragment } = renderComponent(theme, 'borderless-alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with the disabled status', () => {
        const { asFragment } = renderComponent(theme, 'primary', {
          disabled: true,
        })
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
