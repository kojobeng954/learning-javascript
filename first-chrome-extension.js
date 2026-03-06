let myLeads = ["www.awesomeleads.com", "www.epiclead.com","www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const buttonCLicked = document.getElementById("input-btn")
const ulEl = document.getElementById("unordered-list")

buttonCLicked.addEventListener("click", function() {
    let inputWord = inputEl.value
    console.log(inputWord)
});

for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

    let list = document.createElement("li")
    list.textContent = myLeads[i]
    ulEl.append(list)
}