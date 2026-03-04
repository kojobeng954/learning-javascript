let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl =document.getElementById("cards-el")
let cardsArray = [firstCard, secondCard];

function getRandomCard() {
    let randomCard =  Math.floor(Math.random() * 13) + 1

    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}
function startgame() {
    rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cardsArray.length; i++) {
        cardsEl.textContent += cardsArray[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "Yay, you won!";
    hasBlackJack = true
} else{
    message = "You lost";
    isAlive = false
}
messageEl.textContent = message
}

function newcards() {
    if (isAlive === true && hasBlackJack === false) {
        let cardVar = getRandomCard()
    sum = sum + cardVar
    cardsArray.push(cardVar)
    rendergame()
    }
    
}