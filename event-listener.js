let scoreBtn = document.querySelector("button")
let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

scoreBtn.addEventListener("click", () => {
    alert(data[0].score)
})