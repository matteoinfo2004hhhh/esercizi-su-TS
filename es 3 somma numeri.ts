function sommaArray(numeri: number[]): number {
    let somma = 0;
    for (const numero of numeri) {
        somma += numero;
    }
    return somma;
}

const numeriDaSomma: number[] = [1, 2, 3, 4, 5];
const risultatoSomma = sommaArray(numeriDaSomma);
console.log(`La somma degli elementi nell'array è: ${risultatoSomma}`);