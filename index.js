export function analyzeDiceRolls(allRolls){

    for(let i = 0; i < allRolls.length; i++){
        let diceRoll = allRolls[i]

        if(diceRoll.length != 5){
            throw new Error("Le nombre de dés doit être de 5")
        }
        for(let i=0; i<diceRoll.length; i++){
            if(diceRoll[i]< 1 || diceRoll[i] > 6){
                throw new Error("le dé n'est pas compris entre 1 et 6")
        }

        getPoints(diceRoll)
    }
    }
    

    return true;
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
    let hasTree = false
    let hasTwo = false

    for(let value in counts){
        if(counts[value] == 5){
            return 50
        }
        if(counts[value] == 4){
            return 35
        }
        if(counts[value] == 3){
            hasTree = true
        }
        if(counts[value] == 2){
            hasTwo = true
        }
    }
    if(hasTree && hasTwo){
        return 30
    }
    if(hasTree && !hasTwo){
        return 28
    }

    let sumOfDiceRoll = 0
    for(let i = 0; i<diceRoll.length; i++){
        sumOfDiceRoll += diceRoll[i]
    }
    return sumOfDiceRoll
}