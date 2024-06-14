export class RomanNumerals {
  fromArabic(arabicNumber: number) {
    if(arabicNumber === 5) return 'V'
    if(arabicNumber === 4) return 'IV'
    if(arabicNumber === 9) return 'IX'

    if (arabicNumber < 50) {
      const xAmountOfTimes = arabicNumber/ 10
      const xModule = arabicNumber%10
      const currentSolution =   'X'.repeat(xAmountOfTimes)
      if(xModule === 4) return currentSolution + 'IV'
      if(xModule === 9) return currentSolution + 'IX'
      if (xModule > 5) return currentSolution + 'V' + 'I'.repeat(xModule-5)
      return currentSolution + 'I'.repeat(xModule)
    }

    const cAmountOfTimes = arabicNumber/ 100
    if (cAmountOfTimes >= 1 ) return  'C'.repeat(cAmountOfTimes)

    const xAmountOfTimes = arabicNumber/ 10
    const xModule = arabicNumber%10
    if (xAmountOfTimes >= 1 ) return  'X'.repeat(xAmountOfTimes) + 'I'.repeat(xModule)


  }
}
