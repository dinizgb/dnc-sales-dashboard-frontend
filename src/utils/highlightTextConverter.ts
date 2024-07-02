/**
 * Converts text from highlight api to a more explained text
 * @param text - success | alert | warning
 * @returns Converted text
 */
export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Meta longe de ser batida!'
    case 'success':
      return '* A meta do mês foi batida! Parabéns!'
    case 'warning':
      return '* Falta pouco, vamos lá!'
    default:
      return '* Sem dados no momento'
  }
}
