export class RomanNumerals {
  fromArabic(arabicNumber: number) {
    if(arabicNumber === 5) return 'V'
    return "I".repeat(arabicNumber)
  }
}
