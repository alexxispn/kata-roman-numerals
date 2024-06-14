import { describe, expect, it } from "vitest";
import { RomanNumerals } from "./RomanNumerals.js";

describe("Roman Numerals", () => {

  const romanNumerals = new RomanNumerals()


  describe('I cases', () => {
    it.each([
      [1, "I"],
      [2, "II"],
      [3, "III"],
    ])('converts %i to %s', (arabicNumber, romanNumber) => {
      expect(romanNumerals.fromArabic(arabicNumber)).toBe(romanNumber)
    })
  })

  describe('X cases', () => {
    it.each([
      [10, "X"],
      [20, "XX"],
      [30, "XXX"],
    ])('converts %i to %s', (arabicNumber, romanNumber) => {
      expect(romanNumerals.fromArabic(arabicNumber)).toBe(romanNumber)
    })
  })

  it("converts 5 to V", () => {
    expect(romanNumerals.fromArabic(5)).toBe("V")
  })

  it("converts 6 to VI", () => {
    expect(romanNumerals.fromArabic(6)).toBe("VI")
  })

  it("converts 7 to VII", () => {
    expect(romanNumerals.fromArabic(7)).toBe("VII")
  })
})
