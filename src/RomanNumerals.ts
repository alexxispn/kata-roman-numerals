export class RomanNumerals {
  static arabicConversion = [
    { roman: "C", arabic: 100 },
    { roman: "X", arabic: 10 },
    { roman: "IX", arabic: 9 },
    { roman: "V", arabic: 5 },
    { roman: "IV", arabic: 4 },
    { roman: "I", arabic: 1 }
  ];

  fromArabicIterative(arabicNumber: number) {
    let remaining = arabicNumber;
    let romanNumber = "";

    while (remaining > 0) {
      for (const { roman, arabic } of RomanNumerals.arabicConversion) {
        if (remaining >= arabic) {
          remaining = remaining - arabic;
          romanNumber += roman;
        }
      }
    }

    return romanNumber;
  }

  fromArabic(arabicNumber: number): string {
    for (const { roman, arabic } of RomanNumerals.arabicConversion) {
      if (arabicNumber >= arabic) {
        return roman + this.fromArabic(arabicNumber - arabic);
      }
    }
    return "";
  }
}
