let player1time = Math.floor(Math.random() * 100)
let player2time = Math.floor(Math.random() * 100)

function raceDuration() {
    return player1time + player2time
}

let totalTime = raceDuration()

console.log(totalTime);