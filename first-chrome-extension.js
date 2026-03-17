let myLeads = []
const inputEl = document.getElementById("input-el")
const buttonCLicked = document.getElementById("input-btn")
const ulEl = document.getElementById("unordered-list")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const tab = [
        {url: "https://www.google.com"}
    ]

buttonCLicked.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    document.getElementById("input-el").value = ""
    myLeads = localStorage.setItem("myLeads", JSON.stringify(myLeads))
});
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})
tabBtn.addEventListener("click", () => {
    myLeads.push(tab[0].url)
    renderLeads()
    myLeads = localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

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
