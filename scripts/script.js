'use strict'

/*Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
 e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi 
(dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
 */

/*BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni",
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi" */

const elemento = document.querySelector("#mio-id-element"); //variabile con id element

const bottone = document.querySelector("#mio-bottone"); //variabile con id bottone

console.log("luce spenta"); // qui la luce è spenta 

function luce_accesa() {
    console.log("luce accesa"); // quando si effettua il click entra nella function e si accende
    elemento.src = "./img/yellow_lamp.png"; // prendo src e cambio da spento ad acceso 
    elemento.alt = "lampadina accesa"; // modifico anche alt di img
    bottone.innerHTML = "spegni"; // quando si accende la lampadina il bottone va su spegni
}

bottone.addEventListener("click", luce_accesa); //rimani in "ascolto" finchè non cliccano sul bottone 
// niente parentesi graffa ricordare




/*spiegazione per me per ricordare diverse funzioni:

il comando addEventListener scatta e lancia la funzione luce_accesa.
 
A quel punto, il JavaScript va a prendere il tag <img> e modifica al volo la scritta dentro src="...". 
 
 Il browser si accorge che il percorso dell'immagine è cambiato */



// VERSIONE BONUS ACCENDI SPEGNI
/*
function accendi_spegni() {
    if (bottone === "accendi") {
        elemento.src = "./img/yellow_lamp.png";
        elemento.alt = "lampadina accesa";
        bottone.innerHTML = "spegni";
    } else {
        elemento.src = "./img/white_lamp.png";
        elemento.alt = "lampadina spenta";
        bottone.innerHTML = "accendi"
    }
}

bottone.addEventListener('click', accendi_spegni);*/
