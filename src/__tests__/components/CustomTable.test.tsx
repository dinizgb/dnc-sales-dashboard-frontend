import '@testing-library/jest-dom'
import { CustomTable } from '@/components'
import { CustomTableProps } from '@/types'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

const defaultProps: CustomTableProps = {
  headers: ['Header 1', 'Header 2', 'Header 3'],
  rows: [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3'],
  ],
}

describe('CustomTable Component - Light Theme', () => {
  const renderComponent = (theme: Theme) =>
    render(
      <ThemeProvider theme={theme}>
        <CustomTable {...defaultProps} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot', () => {
        const { container } = renderComponent(theme)
        expect(container).toMatchSnapshot()
      })

      it('should render headers correctly', () => {
        const { getAllByRole } = renderComponent(theme)
        const headers = getAllByRole('columnheader')
        expect(headers).toHaveLength(defaultProps.headers.length)
        defaultProps.headers.forEach((header, index) => {
          expect(headers[index]).toHaveTextContent(header)
        })
      })

      it('should render rows and cells correctly', () => {
        const { getAllByRole } = renderComponent(theme)
        const rows = getAllByRole('row')
        expect(rows).toHaveLength(defaultProps.rows.length + 1)

        defaultProps.rows.forEach((row, rowIndex) => {
          const cells = rows[rowIndex + 1].querySelectorAll('td')
          expect(cells).toHaveLength(row.length)
          row.forEach((cell, cellIndex) => {
            expect(cells[cellIndex]).toHaveTextContent(String(cell))
          })
        })
      })
    })
  })
})
