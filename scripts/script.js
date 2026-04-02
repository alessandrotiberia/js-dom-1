'use strict'

/*Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
 e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi 
(dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
 */

const elemento = document.querySelector("#mio-id-element"); //variabile con id element

const bottone = document.querySelector("#mio-bottone"); //variabile con id bottone

function luce_accesa() {
    elemento.src = "./img/yellow_lamp.png"; // prendo src e cambio da spento ad acceso 
    elemento.alt = "lampadina accesa"; // modifico anche alt di img
}

bottone.addEventListener("click", luce_accesa); //rimani in "ascolto" finchè non cliccano sul bottone 
// niente parentesi graffa ricordare


