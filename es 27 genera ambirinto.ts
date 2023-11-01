function generaLabirinto(dimensione: number): string[][] {
    const labirinto: string[][] = [];
    for (let i = 0; i < dimensione; i++) {
        labirinto.push([]);
        for (let j = 0; j < dimensione; j++) {
            labirinto[i].push(Math.random() < 0.3 ? 'X' : 'O'); // 'X' rappresenta un muro, 'O' rappresenta un passaggio
        }
    }
    return labirinto;
}

const dimensioneLabirinto = 5;
const labirintoGenerato = generaLabirinto(dimensioneLabirinto);
console.log('Labirinto generato:');
console.log(labirintoGenerato.map(row => row.join(' ')).join('\n'));