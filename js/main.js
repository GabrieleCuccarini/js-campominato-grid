// Set up delle variabili/costanti
const gridEl = document.querySelector(".grid-container")
const btnPlayEl = document.getElementById("btn-play")
const fluidEl = document.querySelector(".container-fluid")
const chooseDiffEl = document.getElementById("choose-diff")
let celleTotali 
let cellePerRiga
chooseDiffEl.value = 0
let cellaSingola

// Funzione click on "Play" button
btnPlayEl.addEventListener ("click", function() {
    let difficult = parseInt(chooseDiffEl.value)
    gridEl.innerHTML = ""
    console.log(difficult)
    if ( difficult === 1 ) {
        let celleTotali = 100
        let cellePerRiga = 10
        // Imposto il ciclo di creazione delle celle
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div")
            cellaSingola.classList.add("box")
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%"
            cellaSingola.innerHTML = [i]
            gridEl.append(cellaSingola)

            // Funzione click sulle celle per il background
            cellaSingola.addEventListener ("click", function() {
            cellaSingola.classList.toggle( "bg-blue" );
            console.log(cellaSingola.innerHTML)
            })
        }
        // Aggiungo il background color al contenitore principale
        fluidEl.classList.add("bg-active")    
    } else if (  difficult === 2 ) {
        let celleTotali = 81
        let cellePerRiga = 9
        // Imposto il ciclo di creazione delle celle
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div")
            cellaSingola.classList.add("box")
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%"
            cellaSingola.innerHTML = [i]
            gridEl.append(cellaSingola)

            // Funzione click sulle celle per il background
            cellaSingola.addEventListener ("click", function() {
            cellaSingola.classList.toggle( "bg-blue" );
            console.log(cellaSingola.innerHTML)
            })
        }
        // Aggiungo il background color al contenitore principale
        fluidEl.classList.add("bg-active")    
    } else if ( difficult === 3 ) {
        let celleTotali = 49
        let cellePerRiga = 7
        // Imposto il ciclo di creazione delle celle
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div")
            cellaSingola.classList.add("box")
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%"
            cellaSingola.innerHTML = [i]
            gridEl.append(cellaSingola)

            // Funzione click sulle celle per il background
            cellaSingola.addEventListener ("click", function() {
            cellaSingola.classList.toggle( "bg-blue" );
            console.log(cellaSingola.innerHTML)
            })
        // Aggiungo il background color al contenitore principale
        fluidEl.classList.add("bg-active") 
        }
    }   
    console.log(difficult)
})
