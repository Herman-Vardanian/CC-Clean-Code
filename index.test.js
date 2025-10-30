import { describe, expect, it } from "vitest";
import { analyzeDiceRolls, getCounts } from "/index.js";

describe("Analyze dices to get points", () => {
    it("no errors if 5 dices", () => {
        expect(analyzeDiceRolls([[1, 2, 3, 4, 5], [5, 5, 5, 5, 5]])).toBe(true)
    })

    it("too many dices", () => {
        expect(() => analyzeDiceRolls([[1, 2, 3, 4, 5, 6],[1, 2, 3, 4, 5]])).toThrow()
    })

    it("not enough dices", () => {
        expect(() => analyzeDiceRolls([[1, 2, 3, 4],[1, 2, 3, 4, 5]])).toThrow()
    })

    it("one of dice number is not between 1-6", () => {
        expect(() => analyzeDiceRolls([[1, 2, 3, 4, 8],[1, 2, 3, 4, 5]])).toThrow()
    }) 
})

describe("Count how many time a die appear in a roll", () => {
    it("count occurence of a die", () => {
        expect(getCounts([6,6,1,2,2])).toEqual({6:2, 1:1, 2:2})
    })
})
