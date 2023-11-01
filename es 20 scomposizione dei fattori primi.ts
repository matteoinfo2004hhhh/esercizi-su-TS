function scomposizionefatoriprimi(num: number): number[] {
    const fattoriPrimi: number[] = [];
    let div = 2;

    while (num > 1) {
        while (num % div === 0) {
            fattoriPrimi.push(div);
            num /= div;
        }
        div++;
    }

    return fattoriPrimi;
}

const numero = 84;

const fattoriPrimi = scomposizionefatoriprimi(numero);
console.log('Fattori primi di ' + numero + ': ' + fattoriPrimi.join(', '));