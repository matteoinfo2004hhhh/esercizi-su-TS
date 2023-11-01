
function calcolaMedia(numeri: number[]): number {
    if (numeri.length === 0) {
        return 0;
    }

    let somma = 0;
    for (const numero of numeri) {
        somma += numero;
    }

    return somma / numeri.length;
}

const numeriMedia: number[] = [1, 2, 3, 4, 5];
const risultatoMedia = calcolaMedia(numeriMedia);
console.log(`La media degli elementi nell'array è: ${risultatoMedia}`);
