import { describe, it, expect } from "vitest";

class RomanNumerals {
  fromArabic(number: number) {
    return 'I'
  }
}

describe("Roman Numerals", () => {
  it("converts 1 to I", () => {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(1)).toBe("I");
  });

  it("converts 2 to II", () => {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(2)).toBe("II");
  });
});
