import { describe, expect, it } from "vitest";
import { RomanNumerals } from "./RomanNumerals.js";

describe("Roman Numerals", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
  ])('converts %i to %s', (arabicNumber, romanNumber) => {
    const romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(arabicNumber)).toBe(romanNumber)
  })

  it("converts 5 to V", () => {
    const romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(5)).toBe("V")
  })

  it("converts 10 to X", () => {
    const romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(10)).toBe("X")
  })

  it("converts 20 to XX", () => {
    const romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(20)).toBe("XX")
  })
})
