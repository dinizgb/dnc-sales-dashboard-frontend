import { highlightTextConverter } from '@/utils/highlightTextConverter'

describe('highlightTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de ser batida!')
  })

  it('should return the correct text for "success"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* A meta do mês foi batida! Parabéns!'
    )
  })

  it('should return the correct text for "warning"', () => {
    expect(highlightTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('should return the default text for unknown input', () => {
    expect(highlightTextConverter('unknown')).toBe('* Sem dados no momento')
    expect(highlightTextConverter('')).toBe('* Sem dados no momento')
    expect(highlightTextConverter('anything else')).toBe(
      '* Sem dados no momento'
    )
  })
})
