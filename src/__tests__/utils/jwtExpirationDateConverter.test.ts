import { jwtExpirationDateConverter } from '@/utils/jwtExpirationDateConverter'

describe('jwtExpirationDateConverter', () => {
  const realDateNow = Date.now.bind(global.Date)

  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2024-07-01T00:00:00Z').getTime())
  })

  afterAll(() => {
    global.Date.now = realDateNow
  })

  it('should return 0 when the expiration is at the same time', () => {
    const exp = Math.floor(Date.now() / 1000)
    const result = jwtExpirationDateConverter(exp)
    expect(result).toBe(0)
  })

  it('should correctly convert future expiration date to days. 5 days in the future.', () => {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5
    const result = jwtExpirationDateConverter(exp)
    expect(result).toBe(5)
  })

  it('should correctly convert expiration date in a fraction of a day. 12 hours in the future.', () => {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 12
    const result = jwtExpirationDateConverter(exp)
    expect(result).toBe(0.5)
  })
})
