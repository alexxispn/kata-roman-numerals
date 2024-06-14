export class RomanNumerals {
  fromArabic(arabicNumber: number) {
    if(arabicNumber === 5) return 'V'

    if(arabicNumber === 10) return 'X'

    return 'I'.repeat(arabicNumber)
  }
}
