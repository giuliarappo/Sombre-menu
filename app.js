"use script";

import { div } from "./crea_div.js";


let menu;
let categoria;
let antipasto1;
let strong1;
let primi;

function caricaMenu(ilFileJson) {
    $.getJSON(ilFileJson, function( JSON ) {
        menu = JSON.menu;
        categoria = Object.getOwnPropertyNames(JSON.menu);
        primi = menu.primi;
        console.log("menu importato!!");
        visualizzaMenu()

        
    }).fail(function(){
        console.log("An error has occurred.");
    });
}

function visualizzaMenu() {
    for (let index = 0; index < primi.length; index++) {
        console.log(primi[index]);
        antipasto1 = document.getElementsByTagName("h4")[index];
        strong1 = document.getElementsByTagName("strong")[index];
        antipasto1.innerText = primi[index].piatto;
        strong1.innerText = primi[index].prezzo;
    }
    
}

$(document).ready(function () {
    caricaMenu("menu.json"); 
    div.aggiungiDiv;
    //const nuovoAntipasto = new crea_nuovo_div(".primi", "<div>Primi Prova</div>", "schede px-4 py-2");
    //console.log(nuovoAntipasto.aggiungi_div);
});



