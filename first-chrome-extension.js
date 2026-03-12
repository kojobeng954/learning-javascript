let myLeads = []
const inputEl = document.getElementById("input-el")
const buttonCLicked = document.getElementById("input-btn")
const ulEl = document.getElementById("unordered-list")

buttonCLicked.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    document.getElementById("input-el").value = ""
});

function renderLeads() {
    let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a href='${myLeads[i]}' target='_blank' title ='link to website'>${myLeads[i]}</a>
    </li>`
    }
    ulEl.innerHTML = listItems

    // let list = document.createElement("li")
    // list.textContent = myLeads[i]
    // ulEl.append(list)
}
