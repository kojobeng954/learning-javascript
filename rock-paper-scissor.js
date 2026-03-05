let hands = ["rock", "paper", "scissors"]
let randomNumber = Math.floor(Math.random() * 3);

function rules() {
    return hands[randomNumber]
}

console.log(rules());