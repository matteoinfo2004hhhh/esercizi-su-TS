function fattoriale(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fattoriale(n - 1);
}

const risultatoF = fattoriale(5);
console.log('Fattoriale: ' + risultatoF);