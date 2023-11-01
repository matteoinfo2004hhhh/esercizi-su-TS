function calcolaPotenza(base: number, esponente: number): number {
    return Math.pow(base, esponente);
}

const base = 2;
const esponente = 3;
const risultatoPotenza = calcolaPotenza(base, esponente);
console.log(`${base} elevato alla ${esponente} è ${risultatoPotenza}`);
