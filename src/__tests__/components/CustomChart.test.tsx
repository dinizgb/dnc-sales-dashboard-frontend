import { BrowserRouter as Router } from 'react-router-dom'
import { CustomChart } from '@/components'
import { CustomChartProps } from '@/types'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

const barProps: CustomChartProps = {
  data: [10, 20, 30],
  labels: ['January', 'February', 'March'],
  type: 'bar',
}

const lineProps: CustomChartProps = {
  data: [10, 20, 30],
  labels: ['January', 'February', 'March'],
  type: 'line',
}

describe('Custom chart Component', () => {
  const renderComponent = (props: CustomChartProps, theme: Theme) =>
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <CustomChart {...props} />
        </Router>
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot - bar chart', () => {
        const { container } = renderComponent(barProps, theme)
        expect(container).toMatchSnapshot()
      })
      it('should match the snapshot - line chart', () => {
        const { container } = renderComponent(lineProps, theme)
        expect(container).toMatchSnapshot()
      })
    })
  })
})
