import { NBSP, MINUS } from '../store/constants'

export function formatThousands(num: number | string): string {
  const floatNum =
    typeof num === 'string' ? Math.round(parseInt(num)) : Math.round(num)
  if (floatNum <= 999 && floatNum >= -999) {
    return String(floatNum).replace('-', MINUS)
  }
  return floatNum
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)
    .replace('-', MINUS)
}
