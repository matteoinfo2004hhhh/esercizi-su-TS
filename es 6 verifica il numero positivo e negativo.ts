function Positivo(num: number): boolean {
    return num >0;
}

function Negativo(num: number): boolean {
    return num <0;
}

const numerov = 12;

if (Positivo(numerov)) {
    console.log(`${numerov} è un numero positivo`);
} else if (Negativo(numerov)) {
    console.log(`${numerov} è un numero negativo.`);
} else {
    console.log(`${numerov} non è positivo e negativo perhcè il numero è 0`);
}

