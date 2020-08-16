import { NumberFormatValues } from 'react-number-format'

export const allowedLimits = (maxLimit: number): any => {
  return (values: NumberFormatValues): boolean => {
    const { formattedValue, floatValue, value } = values
    const repeatingZeros = value === '0'.repeat(value.length)

    if (repeatingZeros && value.length > 1) {
      return false
    }
    return Boolean(formattedValue === '' || (floatValue as number) <= maxLimit)
  }
}
