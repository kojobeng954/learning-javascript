//ask for bill amount
//the percentage tip should be random from 1% to 8%
//display tip amount
//ask for number of users
//split the bill between people
let billAmount = document.querySelector(".bill")
let tipAmount = document.getElementById("tip")
let totalPeople = document.querySelector(".humans")
let splitBill = document.getElementById("calc-btn")
let actualBill = document.getElementById("final-formula")

// Attach the handler (pass the function, do NOT call it immediately)
splitBill.addEventListener("click", calculateBill)

function calculateBill() {
    // How much was the bill? Convert to number to avoid string concatenation.
    let billInput = Number(window.prompt("How much was your food?"))
    billAmount.textContent = billInput

    //Tip Calculator
    let randomTip = Math.floor(Math.random() * 8) + 1
    tipAmount.textContent = randomTip + "%"

    // Number of people who ate
    let people = Number(window.prompt("How many people ate?"))
    totalPeople.textContent = people + " people"

    // Tip amount (rounded up)
    let tipPrice = Math.ceil((randomTip / 100) * billInput)

    // Split bill per person (rounded up)
    let finalBill = Math.ceil((billInput + tipPrice) / people)

    // Compose and show final formula
    let finalMath = "The final bill is " + (billInput + tipPrice) + " USD. Each person is paying " + finalBill + " USD"
    actualBill.textContent = finalMath
}
