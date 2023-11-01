function trovaNumeroMancante(intervallo: number[]): number {
    const sommaIntervallo = (intervallo[0] + intervallo[1]) * (intervallo[1] - intervallo[0] + 1) / 2;
    const sommaArray = intervallo.reduce((acc, num) => acc + num, 0);
    return sommaIntervallo - sommaArray;
}

const intervallloMancante = [1, 2, 3, 5, 6, 7, 8];
console.log(`Il numero mancante nell'intervallo è: ${trovaNumeroMancante(intervallloMancante)}`);
