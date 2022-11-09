// Set up delle variabili/costanti
const celleTotali = 100
const gridEl = document.querySelector(".grid-container")
const btnPlayEl = document.getElementById("btn-play")
const fluidEl = document.querySelector(".container-fluid")
let cellaSingola

// Funzione click on "Play" button
btnPlayEl.addEventListener ("click", function() {
        // Imposto il ciclo di creazione delle celle
    for (let i = 1; i < 101; i++) {
        const cellaSingola = document.createElement("div")
        cellaSingola.classList.add("box")
        cellaSingola.style.flexBasis = 10 + "%"
        cellaSingola.innerHTML = [i]
        gridEl.append(cellaSingola)

        // Funzione click sulle celle per il background
        cellaSingola.addEventListener ("click", function() {
        cellaSingola.classList.toggle( "bg-blue" );
    })
    }
    // Aggiungo il background color al contenitore principale
    fluidEl.classList.add("bg-active")
})

