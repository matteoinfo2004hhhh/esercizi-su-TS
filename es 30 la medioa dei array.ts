function calcolaMedia(numeri: number[]): number {
    const somma = numeri.reduce((acc, num) => acc + num, 0);
    return somma / numeri.length;
}

const numeri = [1, 2, 3, 4, 5];
console.log(`La media dell'array è: ${calcolaMedia(numeri)}`);
