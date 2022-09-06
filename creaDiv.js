class crea_nuovo_div {
    constructor(div, nuovoDiv, classe){
        this.div = div;
        this.nuovoDiv = nuovoDiv;
        this.classe = classe
    }

    get aggiungi_div() {
        $(div).append(this.nuovoDiv);
        div.addClass(this.classe);
    }
}


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


export { crea_nuovo_div, creaPrimo, creaSecondo, creaContorno };