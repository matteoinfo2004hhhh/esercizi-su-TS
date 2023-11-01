function sonoAnagrammi(parola1: string, parola2: string): boolean {
    return parola1.split('').sort().join('') === parola2.split('').sort().join('');
}

const parola1 = 'listen';
const parola2 = 'silent';
console.log(`Le parole "${parola1}" e "${parola2}" sono anagrammi: ${sonoAnagrammi(parola1, parola2)}`);
