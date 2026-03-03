let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl =document.getElementById("cards-el")
let cardsArray = [firstCard, secondCard];

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
    let cardVar = Math.floor(Math.random() * 10) + 2;
    sum = sum + cardVar
    cardsArray.push(cardVar)
    rendergame()
}