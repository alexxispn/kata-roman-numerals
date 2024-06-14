import { describe, expect, it } from "vitest";
import { RomanNumerals } from "./RomanNumerals.js";

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
