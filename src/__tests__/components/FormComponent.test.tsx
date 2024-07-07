import '@testing-library/jest-dom'
import 'jest-styled-components'
import { FormComponentProps } from '@/types'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'
import FormComponent from '@/components/FormComponent'

describe('FormComponent', () => {
  const renderComponent = (theme: Theme, props: FormComponentProps) =>
    render(
      <ThemeProvider theme={theme}>
        <FormComponent {...props} />
      </ThemeProvider>
    )

  const mockProps: FormComponentProps = {
    inputs: [
      { placeholder: 'Input 1' },
      { placeholder: 'Input 2', type: 'password' },
    ],
    buttons: [
      { children: 'Submit', className: 'primary', type: 'submit' },
      { children: 'Cancel', className: 'alert' },
    ],
    message: {
      msg: 'This is an error message.',
      type: 'error',
    },
  }

  const successMockProps: FormComponentProps = {
    ...mockProps,
    message: {
      msg: 'This is a success message.',
      type: 'success',
    },
  }

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should render all inputs correctly', () => {
        const { getByPlaceholderText } = renderComponent(theme, mockProps)
        expect(getByPlaceholderText('Input 1')).toBeInTheDocument()
        expect(getByPlaceholderText('Input 2')).toBeInTheDocument()
      })

      it('should render all buttons correctly', () => {
        const { getByText } = renderComponent(theme, mockProps)

        expect(getByText('Submit')).toBeInTheDocument()
        expect(getByText('Cancel')).toBeInTheDocument()
      })

      it('should render the error message correctly', () => {
        const { getByText } = renderComponent(theme, mockProps)

        const messageElement = getByText('This is an error message.')
        expect(messageElement).toBeInTheDocument()
        expect(messageElement).toHaveClass('error')
      })

      it('should render success message correctly', () => {
        const { getByText } = renderComponent(theme, successMockProps)

        const messageElement = getByText('This is a success message.')
        expect(messageElement).toBeInTheDocument()
        expect(messageElement).toHaveClass('success')
      })
    })
  })
})
