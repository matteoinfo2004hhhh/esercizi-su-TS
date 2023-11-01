function verificaPali(parola: string): boolean {
    const parolaInvertita = parola.split('').reverse().join('');
    return parola === parolaInvertita;
}

const parola = 'radar';
console.log('È un palindromo: ' + verificaPali(parola));