
function generaNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matrice: number[][] = [];

for (let i = 0; i < 10; i++) {
    matrice[i] = [];
    for (let j = 0; j < 10; j++) {
        matrice[i][j] = generaNum(1, 1000); 
    }
}

for (let i = 0; i < matrice.length; i++) {
    console.log(matrice[i].join("\t")); 
}