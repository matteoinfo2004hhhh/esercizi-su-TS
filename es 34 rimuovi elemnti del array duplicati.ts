function rimuoviDuplicati<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

const numeri = [1, 2, 2, 3, 4, 4, 5];
const numeriSenzaDuplicati = rimuoviDuplicati(numeri);
console.log('Numeri senza duplicati:');
console.log(numeriSenzaDuplicati);
