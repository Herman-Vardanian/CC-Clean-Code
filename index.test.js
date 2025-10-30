import { describe, expect, it } from "vitest";
import { analyzeDiceRolls, getCounts, getPoints } from "/index.js";

describe("Analyze dices to get points", () => {
    it("YAMS + chance", () => {
        expect(analyzeDiceRolls([[6, 6, 5, 5, 4], [5, 5, 5, 5, 5]])).toBe(76)
    })

    it("Full + YAMS", () => {
        expect(analyzeDiceRolls([[6, 6, 6, 5, 5], [5, 5, 5, 5, 5]])).toBe(80)
    })

    it("Brelan + Carré + Grande suite", () => {
        expect(analyzeDiceRolls([[1,1,1,5,6], [5,5,5,5,1], [3,4,1,2,5]])).toBe(103)
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

describe("return how many points you get from a roll", () => {
    it("3 times the same die (Brelan)", () => {
        expect(getPoints([2,2,2,4,5])).toBe(28)
    })

    it("4 times the same die (Carré)", () => {
        expect(getPoints([2,2,2,2,5])).toBe(35)
    })

    it("5 times the same die (YAMS)", () => {
        expect(getPoints([2,2,2,2,2])).toBe(50)
    })

    it("3 times the same die + 2 times the same die(Full)", () => {
        expect(getPoints([2,2,2,3,3])).toBe(30)
    })

    it("5 die in a row(Grande suite)", () => {
        expect(getPoints([3,4,5,1,2])).toBe(40)
    })

    it("No figures (Chance)", () => {
        expect(getPoints([6,6,5,5,4])).toBe(26)
    })
})