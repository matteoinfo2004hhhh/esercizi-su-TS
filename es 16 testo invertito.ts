function invertiStringa(testo: string): string {
    return testo.split('').reverse().join('');
}

const testo = 'ciao a tutti';
const testoinv = invertiStringa(testo);
console.log('Testo invertito: ' + testoinv);
