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

        getCounts(diceRoll)
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