let età = parseInt (prompt('Inserisci la tua età'));
let kilometri = parseInt (prompt('Inserisci numero kilometri da percorrere'));
let tariffa = 0.21;
let prezzo = tariffa * kilometri;
if (età < 18) {
    let discount = prezzo * 20 / 100;
    prezzo = prezzo - discount;
} else if (età > 64) {
    let discount = prezzo * 40 / 100;
    prezzo = prezzo - discount;
}
alert ('Il prezzo è di ' + prezzo.toFixed(2) + ' Euro')