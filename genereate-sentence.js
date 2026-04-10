function generateSentence(description, array) {
    let baseString = "The " + array.length + description + " are "
    const lastIndex = array.length - 1
    for (let i = 0; i < array.length; i++) {
        if (i === lastIndex) {
            baseString += array[i]
        } else {
            baseString += array[i] + ", "
        }
    }
}

generateSentence(" biggest countries in the world", ["China", "India", "USA", "Indonesia", "Pakistan"])