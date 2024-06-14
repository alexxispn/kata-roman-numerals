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

  it("converts 1 to I", () => {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(1)).toBe("I");
  });

  it("converts 2 to II", () => {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(2)).toBe("II");
  });

  it("converts 3 to III", () => {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.fromArabic(3)).toBe("III");
  });
});
