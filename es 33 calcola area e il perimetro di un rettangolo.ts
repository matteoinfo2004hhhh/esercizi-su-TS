interface Rettangolo {
    base: number;
    altezza: number;
}

function calcolaAreaRettangolo(rettangolo: Rettangolo): number {
    return rettangolo.base * rettangolo.altezza;
}

function calcolaPerimetroRettangolo(rettangolo: Rettangolo): number {
    return 2 * (rettangolo.base + rettangolo.altezza);
}

const rettangolo: Rettangolo = { base: 5, altezza: 10 };
console.log(`Area del rettangolo: ${calcolaAreaRettangolo(rettangolo)}`);
console.log(`Perimetro del rettangolo: ${calcolaPerimetroRettangolo(rettangolo)}`);
