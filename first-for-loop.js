let sentence = ["hello", "my", "name", "is", "Ernest"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}