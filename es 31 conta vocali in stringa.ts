function contaVocali(testo: string): number {
    const vocali = testo.match(/[aeiou]/gi);
    return vocali ? vocali.length : 0;
}

const testo = 'Questo è un esempio di conteggio delle vocali.';
console.log(`Il numero di vocali nel testo è: ${contaVocali(testo)}`);
