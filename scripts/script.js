'use strict'

/*Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
 e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi 
(dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
 */

const elemento = document.querySelector("#mio-id-element"); //variabile con id element

const bottone = document.querySelector("#mio-bottone"); //variabile con id bottone
 
console.log("luce spenta"); // qui la luce è spenta 

function luce_accesa() {
     console.log("luce accesa"); // quando si effettua il click entra nella function e si accende
    elemento.src = "./img/yellow_lamp.png"; // prendo src e cambio da spento ad acceso 
    elemento.alt = "lampadina accesa"; // modifico anche alt di img
}

bottone.addEventListener("click", luce_accesa); //rimani in "ascolto" finchè non cliccano sul bottone 
// niente parentesi graffa ricordare

/*spiegazione per me per ricordare diverse funzioni:

il comando addEventListener scatta e lancia la funzione luce_accesa.
 
A quel punto, il JavaScript va a prendere il tag <img> e modifica al volo la scritta dentro src="...". 
 
 Il browser si accorge che il percorso dell'immagine è cambiato */


