import { describe, expect, it } from "vitest";
import { RomanNumerals } from "./RomanNumerals.js";

describe("Roman Numerals", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
  ])('converts %i to %s', (arabicNumber, romanNumber) => {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(arabicNumber)).toBe(romanNumber)
  })
})
