let firstPlayer = document.getElementById("player-one")
let secondPlayer = document.getElementById("player-two")
let startGame = document.getElementById("start-button")
let finalResult = document.querySelector(".win-or-lose")

startGame.addEventListener("click",function () {
    let random1 = Math.floor(Math.random() * 6) + 1
    let random2 = Math.floor(Math.random() * 6) + 1
    firstPlayer.textContent = random1
    secondPlayer.textContent = random2
    displayResult()
});

function displayResult() {
    let playerOneScore = parseInt(firstPlayer.textContent)
    let playerTwoScore = parseInt(secondPlayer.textContent)
    if (playerOneScore === playerTwoScore) {
    finalResult.textContent = "This is a draw."
} else if (playerOneScore > playerTwoScore) {
    finalResult.textContent = "Player One wins"
} else if (playerOneScore < playerTwoScore) {
    finalResult.textContent = "Player Two Wins"
}
}
