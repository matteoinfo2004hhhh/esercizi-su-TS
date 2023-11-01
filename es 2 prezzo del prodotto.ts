
class Prodotto {
    constructor(public nome: string, public prezzo: number) {}
}


function calcolaPrezzoTotale(prodotti: Prodotto[]): number {
    let prezzoTotale = 0;
    for (const prodotto of prodotti) {
        prezzoTotale += prodotto.prezzo;
    }
    return prezzoTotale;
}


const listaProdotti: Prodotto[] = [
    new Prodotto('Maglietta', 20),
    new Prodotto('Pantaloni', 40),
    new Prodotto('Scarpe', 50)
];

const prezzoTotale = calcolaPrezzoTotale(listaProdotti);
console.log(`Il prezzo totale dei prodotti è: ${prezzoTotale} euro`);