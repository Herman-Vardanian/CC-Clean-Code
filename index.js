export function analyzeDiceRolls(allRolls){
    let resultDiceRolls = 0;
    for(let i = 0; i < allRolls.length; i++){
        let diceRoll = allRolls[i]

        if(diceRoll.length != 5){
            throw new Error("Le nombre de dés doit être de 5")
        }
        for(let j=0; j<diceRoll.length; j++){
            if(diceRoll[j]< 1 || diceRoll[j] > 6){
                throw new Error("le dé n'est pas compris entre 1 et 6")
            }
        }
        resultDiceRolls += getPoints(diceRoll)
    }
    

    return resultDiceRolls;
} 

export function getCounts(diceRoll) {
    let dieCount = {}

    for(let i = 0; i < diceRoll.length; i++){
        let value = diceRoll[i]
        if(dieCount[value]){
            dieCount[value] += 1
        } 
        else{
            dieCount[value] = 1
        }
    }

    return dieCount
}

export function getPoints(diceRoll){
    let counts = getCounts(diceRoll)
    let hasBrelan = false
    let hasPair = false

    for(let value in counts){
        if(counts[value] == 5){
            return 50
        }
        if(counts[value] == 4){
            return 35
        }
        if(counts[value] == 3){
            hasBrelan = true
        }
        if(counts[value] == 2){
            hasPair = true
        }
    }
    if(hasBrelan && hasPair){
        return 30
    }
    if(hasBrelan && !hasPair){
        return 28
    }

    let sortedDiceRoll = [...diceRoll].sort((a,b) => a-b)
    let seq1 = [1, 2, 3, 4, 5] 
    let seq2 = [2, 3, 4, 5, 6] 

    if(sortedDiceRoll.join(',') == seq1.join(',') || sortedDiceRoll.join(',') == seq2.join(',') ){
        return 40
    }

    let sumOfDiceRoll = 0
    for(let i = 0; i<diceRoll.length; i++){
        sumOfDiceRoll += diceRoll[i]
    }
    return sumOfDiceRoll
}