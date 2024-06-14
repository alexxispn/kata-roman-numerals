export class RomanNumerals {
  fromArabic(arabicNumber: number) {
    if(arabicNumber === 5) return 'V'
    if(arabicNumber === 100) return 'C'
    if (arabicNumber === 200) return 'CC'
    if (arabicNumber === 300) return 'CCC'


    const xAmountOfTimes = arabicNumber/ 10
    const xModule = arabicNumber%10
    if (xAmountOfTimes >= 1 ) return  'X'.repeat(xAmountOfTimes) + 'I'.repeat(xModule)

    const vAmountOfTimes = arabicNumber / 5
    const module = arabicNumber % 5
    if (vAmountOfTimes >= 1) return 'V' + 'I'.repeat(module)

    return 'I'.repeat(arabicNumber)
  }
}
