export function analyzeDices(dices){
    if(dices.length != 5){
        throw new Error("Le nombre de dés doit être de 5")
    }

    for(let i=0; i<dices.length; i++){
        if(dices[i]< 1 || dices[i] > 6){
            throw new Error("le dé n'est pas compris entre 1 et 6")
        }
    }

    return true;
} 