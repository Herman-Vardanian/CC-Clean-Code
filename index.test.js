import { describe, expect, it } from "vitest";
import { analyzeDices } from "/index.js";

describe("Analyze dices to get points", () => {
    it("no errors if 5 dices", () => {
    expect(analyzeDices([1, 2, 3, 4, 5])).toBe(true)
  })

  it("throw an error when there are not 5 dice", () => {
    expect(() => analyzeDices([1, 2, 3, 4])).toThrow()
    expect(() => analyzeDices([1, 2, 3, 4, 5, 6])).toThrow()
  })
})