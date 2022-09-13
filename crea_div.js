"use script";

class creaNuovoDiv {
    constructor(div, nuovoDiv, classe){
        this.div = div;
        this.nuovoDiv = nuovoDiv;
        this.classe = classe
    }

    get aggiungiDiv() {
        console.log("aggiunto!!")
        $(div).append(this.nuovoDiv);
        this.nuovoDiv.addClass(this.classe);
    }
}

const div = new creaNuovoDiv(".primi", $("<h1>Primi Prova</h1>"), "schede px-4 py-2");

/*
function creaPrimo() {
    let div = $(".primi");
    let nuovoDiv = $("<div>Primi Prova</div>");
    $(div).append(nuovoDiv);
    div.addClass("schede px-4 py-2")
}

function creaSecondo() {
    let div = $(".secondi");
    let nuovoDiv = $("<div>Secondi Prova</div>");
    $(div).append(nuovoDiv);
    div.addClass("schede px-4 py-2")
}

function creaContorno() {
    let div = $(".contorni");
    let nuovoDiv = $("<div>Contorni Prova</div>");
    $(div).append(nuovoDiv);
    div.addClass("schede px-4 py-2")
}



function crea_div(_div, _nuovo_div, _classe) {
    return {
        _div,
        
    }
}

const crea_div (_div, _nuovo_div, _classe) = {
    div = div,
    nuovo_div : function() {
        console.log("creo un nuovo div!");
        $(_div).append(_nuovo_div);
        _nuovo_div.addClass("schede px-4 py-2");
    }
}
*/
export { div };