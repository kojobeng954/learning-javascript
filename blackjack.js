let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl =document.getElementById("cards-el")

function startgame() {
    rendergame()
}

function rendergame() {
    if (sum <= 20) {
    cardsEl.textContent ="Cards: " + firstCard + " and " + secondCard 
    message = "Do you want to draw a new card?";
    sumEl.textContent = "SUM:" + sum
} else if (sum === 21) {
    cardsEl.textContent ="Cards: "+ firstCard + " and " + secondCard
    message = "Yay, you won!";
    sumEl.textContent = "SUM:" + sum
    hasBlackJack = true
} else if (sum > 21) {
    cardsEl.textContent ="Cards: "+ firstCard + " and " + secondCard
    message = "You lost";
    sumEl.textContent = "SUM:" + sum
    isAlive = false
}
messageEl.textContent = message
}

function newcards() {
    let cardVar = Math.floor(Math.random() * 10) + 2;
    sum = sum + cardVar
    rendergame()
}