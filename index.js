export function analyzeDices(dices){
    if(dices.length != 5){
        throw new Error("Le nombre de dés doit être de 5")
    }
    return true;
} 