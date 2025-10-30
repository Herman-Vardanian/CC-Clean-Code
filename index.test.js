import { describe, expect, it } from "vitest";
import { analyzeDices } from "/index.js";

describe("Analyze dices to get points", () => {
    it("no errors if 5 dices", () => {
        expect(analyzeDices([1, 2, 3, 4, 5])).toBe(true)
    })

    it("too many dices", () => {
        expect(() => analyzeDices([1, 2, 3, 4, 5, 6])).toThrow()
    })

    it("not enough dices", () => {
        expect(() => analyzeDices([1, 2, 3, 4])).toThrow()
    })

    it("one of dice number is not between 1-6", () => {
        expect(() => analyzeDices([1, 2, 3, 4, 8])).toThrow()
    })
})