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
});
