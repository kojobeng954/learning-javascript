 let randomNumber = Math.random() * 6
let randomDiceNumber = Math.floor(randomNumber + 1)

function rollDice() {
    return randomDiceNumber
}

console.log(rollDice());


/* Let javascript create a random number between 2 and 11 */
let random = Math.floor(Math.random() * 10) + 2
console.log(random);
