function contaParole(testo: string): number {
    const parole = testo.split(/\s+/);
    return parole.length;
}

const testo = 'Questo è un esempio di conteggio delle parole.';
const numeroP = contaParole(testo);
console.log('la parola:'+testo)
console.log('Numero di parole: ' + numeroP);
