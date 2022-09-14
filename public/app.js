let menu;
let categoria;
let primi;
let antipasti;
let secondi;
let contorni;

function caricaMenu(ilFileJson) {
    $.getJSON(ilFileJson, function( JSON ) {
        menu = JSON.menu;
        categoria = Object.getOwnPropertyNames(JSON.menu);
        primi = menu.primi;
        antipasti = menu.antipasti;
        secondi = menu.secondi;
        contorni = menu.contorni;
        console.log("menu importato!!");
        visualizzaMenu()

        
    }).fail(function(){
        console.log("An error has occurred.");
    });
}

function visualizzaMenu() {
    //antipasti
    for (let index = 0; index < antipasti.length; index++) {
        let htmlElementPiatto = document.getElementsByClassName("antipasto")[index];
        let htmlElementPrezzo = document.getElementsByClassName("prezzoAntipasto")[index];
        htmlElementPiatto.innerText = antipasti[index].piatto;
        htmlElementPrezzo.innerText = antipasti[index].prezzo;
    }

    //primi
    for (let index = 0; index < primi.length; index++) {
        console.log(primi[index]);
        let htmlElementPiatto = document.getElementsByClassName("primo")[index];
        let htmlElementPrezzo = document.getElementsByClassName("prezzoPrimo")[index];
        htmlElementPiatto.innerText = primi[index].piatto;
        htmlElementPrezzo.innerText = primi[index].prezzo;
    }

    //secondi
    for (let index = 0; index < secondi.length; index++) {
        let htmlElementPiatto = document.getElementsByClassName("secondo")[index];
        let htmlElementPrezzo = document.getElementsByClassName("prezzoSecondo")[index];
        htmlElementPiatto.innerText = secondi[index].piatto;
        htmlElementPrezzo.innerText = secondi[index].prezzo;
    }

    //contorni
    for (let index = 0; index < contorni.length; index++) {
        let htmlElementPiatto = document.getElementsByClassName("contorno")[index];
        let htmlElementPrezzo = document.getElementsByClassName("prezzoContorno")[index];
        htmlElementPiatto.innerText = contorni[index].piatto;
        htmlElementPrezzo.innerText = contorni[index].prezzo;
    }

    // nasconde dettagli
    $(".dettagli").css("display", "none");
}



$(document).ready(function () {
    caricaMenu("menu.json"); 
    const nuovoAntipasto = new crea_nuovo_div(".primi", "<div>Primi Prova</div>", "schede px-4 py-2");
    console.log(nuovoAntipasto.aggiungi_div);
});



