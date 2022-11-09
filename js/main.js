const celleTotali = 100
const gridEl = document.querySelector(".grid-container")

for (let i = 1; i < 101; i++) {
    const cellaSingola = document.createElement("div")
    cellaSingola.classList.add("box")
    cellaSingola.style.flexBasis = 10 + "%"
    cellaSingola.innerHTML = [i]
    gridEl.append(cellaSingola)
}
