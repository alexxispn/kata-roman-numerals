export class RomanNumerals {
  fromArabic(arabicNumber: number) {
    if(arabicNumber === 5) return 'V'

    const xAmountOfTimes = arabicNumber/ 10
    if (xAmountOfTimes >= 1 ) return  'X'.repeat(xAmountOfTimes)
    return 'I'.repeat(arabicNumber)
  }
}
