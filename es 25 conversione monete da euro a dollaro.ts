function convertiValuta(amount: number, tassoDiCambio: number): number {
    return amount * tassoDiCambio;
}

const amountInDollari = 100;
const tassoDiCambioEuro = 0.85;
const amountInEuro = convertiValuta(amountInDollari, tassoDiCambioEuro);
console.log(`${amountInDollari} dollari sono equivalenti a ${amountInEuro} euro`);