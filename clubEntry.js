let age = 102

if (age < 100) {
    console.log("You cannot get a birthday card from the king");
} else if (age === 100){
    console.log("Here is your birthday card from the king");
} else {
    console.log("You already received your birthday card " + (age - 100) + " years ago");
}