let age = Math.floor(Math.random() * 100) + 1

if (age <= 5) {
    console.log(age + ":It is free.");
} else if (6 < age && age < 17) {
    console.log(age + ": User gets a child discount.");
} else if (18 < age && age < 26) {
    console.log(age + ": User gets a student discount.");
} else if (27 < age && age < 66) {
    console.log(age + ": User pays the full price.")
} else  if (age > 66) {
    console.log( age + ": User gets senior citizen discount");
}