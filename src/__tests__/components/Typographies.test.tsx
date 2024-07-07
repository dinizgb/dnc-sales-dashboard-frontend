import { render } from '@testing-library/react'
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
  StyledUl,
} from '@/components'
import { Theme, TypographiesProps } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

const customTypographiesProps: TypographiesProps = {
  color: 'green',
  size: 35,
  lineheight: 40,
  weight: 600,
}

describe('Typographies Component', () => {
  const renderH1Component = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledH1 {...props} />
      </ThemeProvider>
    )

  const renderH2Component = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledH2 {...props} />
      </ThemeProvider>
    )

  const renderH3Component = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledH3 {...props} />
      </ThemeProvider>
    )

  const renderPComponent = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledP {...props} />
      </ThemeProvider>
    )

  const renderSpanComponent = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledSpan {...props} />
      </ThemeProvider>
    )

  const renderUlComponent = (theme: Theme, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledUl {...props} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      // H1
      it('should match the snapshot - H1', () => {
        const { asFragment } = renderH1Component(theme)
        expect(asFragment()).toMatchSnapshot()
      })
      it('should match the snapshot - H1 with custom props', () => {
        const { asFragment } = renderH1Component(theme, customTypographiesProps)
        expect(asFragment()).toMatchSnapshot()
      })

      // H2
      it('should match the snapshot - H2', () => {
        const { asFragment } = renderH2Component(theme)
        expect(asFragment()).toMatchSnapshot()
      })
      it('should match the snapshot - H2 with custom props', () => {
        const { asFragment } = renderH2Component(theme, customTypographiesProps)
        expect(asFragment()).toMatchSnapshot()
      })

      // H3
      it('should match the snapshot - H3', () => {
        const { asFragment } = renderH3Component(theme)
        expect(asFragment()).toMatchSnapshot()
      })
      it('should match the snapshot - H3 with custom props', () => {
        const { asFragment } = renderH3Component(theme, customTypographiesProps)
        expect(asFragment()).toMatchSnapshot()
      })

      // P
      it('should match the snapshot - P', () => {
        const { asFragment } = renderPComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })
      it('should match the snapshot - P with custom props', () => {
        const { asFragment } = renderPComponent(theme, customTypographiesProps)
        expect(asFragment()).toMatchSnapshot()
      })

      // SPAN
      it('should match the snapshot - Span', () => {
        const { asFragment } = renderSpanComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })
      it('should match the snapshot - Span with custom props', () => {
        const { asFragment } = renderSpanComponent(
          theme,
          customTypographiesProps
        )
        expect(asFragment()).toMatchSnapshot()
      })

      // UL
      it('should match the snapshot - UL', () => {
        const { asFragment } = renderUlComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })
      it('should match the snapshot - UL with custom props', () => {
        const { asFragment } = renderUlComponent(theme, customTypographiesProps)
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
