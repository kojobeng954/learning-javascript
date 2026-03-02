let firstNum = 8
let secondNum = 2
document.getElementById("num1-el").textContent = firstNum
document.getElementById("num2-el").textContent = secondNum
let finalAnswer = document.getElementById("sum-el")

function addition() {
    finalAnswer.textContent = "Sum: " + (firstNum + secondNum)
}

function subtraction() {
    finalAnswer.textContent = "Sum: " + (firstNum - secondNum)
}

function multiplication() {
    finalAnswer.textContent = "Sum: " + (firstNum * secondNum)
}

function division() {
    finalAnswer.textContent = "Sum: " + (firstNum / secondNum)
}