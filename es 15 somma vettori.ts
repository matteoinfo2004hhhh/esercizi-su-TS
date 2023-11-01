function sommaArray(numeri: number[]): number {
    return numeri.reduce((acc, num) => acc + num, 0);
}

const numeri = [100, 23, 77, 48, 50];
const somma = sommaArray(numeri);
console.log('Somma degli elementi: ' + somma);