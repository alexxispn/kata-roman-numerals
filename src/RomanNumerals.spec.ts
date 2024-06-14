import { describe, expect, it } from "vitest";
import { RomanNumerals } from "./RomanNumerals.js";

describe("Roman Numerals", () => {
  describe('I cases', () => {
    it.each([
      [1, "I"],
      [2, "II"],
      [3, "III"],
    ])('converts %i to %s', (arabicNumber, romanNumber) => {
      const romanNumerals = new RomanNumerals();
      expect(romanNumerals.fromArabic(arabicNumber)).toBe(romanNumber)
    })
  })

  describe('X cases', () => {
    it.each([
      [10, "X"],
      [20, "XX"],
      [30, "XXX"],
    ])('converts %i to %s', (arabicNumber, romanNumber) => {
      const romanNumerals = new RomanNumerals();
      expect(romanNumerals.fromArabic(arabicNumber)).toBe(romanNumber)
    })
  })

  it("converts 5 to V", () => {
    const romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(5)).toBe("V")
  })
})
