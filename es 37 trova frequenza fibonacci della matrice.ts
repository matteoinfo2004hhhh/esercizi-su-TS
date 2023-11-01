function moltiplicaMatrici(a: number[][], b: number[][]): number[][] {
    const righeA = a.length;
    const colonneA = a[0].length;
    const colonneB = b[0].length;
    const risultato: number[][] = [];

    for (let i = 0; i < righeA; i++) {
        risultato[i] = [];
        for (let j = 0; j < colonneB; j++) {
            risultato[i][j] = 0;
            for (let k = 0; k < colonneA; k++) {
                risultato[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return risultato;
}

function calcolaFibonacciConMatrici(n: number): number {
    if (n <= 1) {
        return n;
    }

    const base: number[][] = [[1, 1], [1, 0]];
    let risultato: number[][] = [[1, 1], [1, 0]];

    for (let i = 2; i <= n; i++) {
        risultato = moltiplicaMatrici(risultato, base);
    }

    return risultato[0][1];
}

const n = 10;
console.log(`Il ${n}-esimo numero di Fibonacci è: ${calcolaFibonacciConMatrici(n)}`);
