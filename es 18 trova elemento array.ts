function trovaElemento(numeri: number[], numc: number): boolean {
    return numeri.includes(numc);
}

const numeri = [1, 2, 3, 4, 5];
const numc = 3;
console.log('Elemento trovato: ' + trovaElemento(numeri, numc));