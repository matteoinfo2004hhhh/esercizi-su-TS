function Pari(num: number): boolean {
    return num % 2 === 0;
}

function Dispari(num: number): boolean {
    return num % 2 !== 0;
}

const numerov = 6;

if (Pari(numerov)) {
    console.log(`${numerov} è un numero pari.`);
} else if (Dispari(numerov)) {
    console.log(`${numerov} è un numero dispari.`);
} else {
    console.log(`${numerov} non è né pari né dispari.`);
}

