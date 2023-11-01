function calcolaQuadratoMatrice(matrice: number[][]): number[][] {
    return matrice.map(riga => riga.map(numero => numero * numero));
}

const matrice = [[1, 2], [3, 4]];
const quadratoMatrice = calcolaQuadratoMatrice(matrice);
console.log('Quadrato della matrice:');
console.log(quadratoMatrice);
