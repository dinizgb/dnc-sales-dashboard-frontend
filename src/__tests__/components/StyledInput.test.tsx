import '@testing-library/jest-dom'
import 'jest-styled-components'
import { pxToRem } from '@/utils'
import { render } from '@testing-library/react'
import { StyledInput } from '@/components'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('StyledInput Component', () => {
  const renderComponent = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledInput {...props} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match snapshot', () => {
        const { asFragment } = renderComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })

      it('should apply active styles', () => {
        const { getByRole } = renderComponent(theme)
        const input = getByRole('textbox')
        expect(input).toHaveStyleRule(
          'background-color',
          theme.textInput.active
        )
        expect(input).toHaveStyleRule('color', theme.textInput.activeColor)
        expect(input).toHaveStyleRule(
          'border',
          `${pxToRem(1)} solid ${theme.textInput.borderColor}`
        )
      })

      it('should apply disabled styles', () => {
        const { getByRole } = renderComponent(theme, { disabled: true })
        const input = getByRole('textbox')
        expect(input).toHaveStyleRule(
          'background-color',
          theme.textInput.disabled,
          { modifier: ':disabled' }
        )
        expect(input).toHaveStyleRule(
          'border',
          `${pxToRem(1)} solid ${theme.textInput.disabledBorderColor}`,
          { modifier: ':disabled' }
        )
        expect(input).toHaveStyleRule('color', theme.textInput.disabledColor, {
          modifier: ':disabled',
        })
      })

      it('should apply placeholder styles', () => {
        const { getByPlaceholderText } = renderComponent(theme, {
          placeholder: 'Type here...',
        })
        const input = getByPlaceholderText('Type here...')
        expect(input).toHaveStyleRule(
          'color',
          theme.textInput.placeholderColor,
          { modifier: '::placeholder' }
        )
      })
    })
  })
})
