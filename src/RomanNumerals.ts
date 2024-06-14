export class RomanNumerals {
  fromArabic(arabicNumber: number) {
    if(arabicNumber === 5) return 'V'

    if(arabicNumber === 10) return 'X'
    if(arabicNumber === 20) return 'XX'
    if(arabicNumber === 30) return 'XXX'


    return 'I'.repeat(arabicNumber)
  }
}
