import * as readlineSync from "readline-sync";

function verificanum(numeri: number[]): boolean {
    let numeriPariPositivi = 0;

    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] % 2 === 0 && numeri[i] > 0) {
            numeriPariPositivi++;
        }
    }

    return numeriPariPositivi === 5;
}

const input = readlineSync.question("Inserisci cinque numeri separati da spazi: ");
const numeriInseriti = input.split(" ").map(Number);

if (numeriInseriti.length !== 5) {
    console.log("Devi inserire esattamente cinque numeri.");
} else {
    if (verificanum(numeriInseriti)) {
        console.log("Tutti i cinque numeri sono pari e positivi.");
    } else {
        console.log("Almeno uno dei cinque numeri non è pari e/o positivo.");
    }
}