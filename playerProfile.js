let scores = [0, 0, 0]; // Track score for each player
let levels = [0, 0, 0]; // Track level for each player
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        scores[index]++;
        
        // Check if score is a multiple of 5
        if (scores[index] % 5 === 0) {
            levels[index]++;
            // Update level display
            const levelDisplay = button.parentElement.querySelector("#levels");
            levelDisplay.textContent = "Level: " + levels[index];
        }
        
        // Get the score display for this player
        const scoreDisplay = button.parentElement.querySelector("#scores");
        scoreDisplay.textContent = "Score: " + scores[index];
    });
});