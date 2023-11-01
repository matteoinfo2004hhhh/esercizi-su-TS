function trovaNumeriRepetuti(numeri: number[]): number[] {
    const numeriRepetuti: number[] = [];
    const numeriUnici: Set<number> = new Set();

    numeri.forEach(numero => {
        if (numeriUnici.has(numero)) {
            numeriRepetuti.push(numero);
        } else {
            numeriUnici.add(numero);
        }
    });

    return numeriRepetuti;
}

const numeri = [1, 2, 3, 4, 2, 5, 6, 1];
console.log(`Numeri ripetuti nell'array sono: ${trovaNumeriRepetuti(numeri)}`);
