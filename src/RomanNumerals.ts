export class RomanNumerals {

  fromArabic(arabicNumber: number) {
    const romanNumbers = [
      { roman: "C", arabic: 100 },
      { roman: "X", arabic: 10 },
      { roman: "IX", arabic: 9 },
      { roman: "V", arabic: 5 },
      { roman: "IV", arabic: 4 },
      { roman: "I", arabic: 1 }
    ];

    let remaining = arabicNumber;
    let romanNumber = "";

    while (remaining > 0) {
      for (const { roman, arabic } of romanNumbers) {
        if (remaining >= arabic) {
          remaining = remaining - arabic;
          romanNumber += roman;
        }
      }
    }

    return romanNumber;
  }
}
