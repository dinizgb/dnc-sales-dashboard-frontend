import { render } from '@testing-library/react'
import 'jest-styled-components'
import { BannerImage } from '@/components'

test('renders BannerImage with correct styles', () => {
  const { container } = render(<BannerImage />)
  expect(container.firstChild).toHaveStyleRule(
    'background-image',
    'url(/login-image.svg)'
  )
  expect(container.firstChild).toHaveStyleRule('background-size', 'cover')
  expect(container.firstChild).toHaveStyleRule('height', '100vh')
  expect(container.firstChild).toHaveStyleRule('width', '50vw')
})
