function trovaModa(numeri: number[]): number {
    const frequenze: Record<string, number> = {};
    numeri.forEach(numero => {
        frequenze[numero] = (frequenze[numero] || 0) + 1;
    });

    let moda: number;
    let frequenzaModa = 0;

    Object.keys(frequenze).forEach(numero => {
        const frequenza = frequenze[numero];
        if (frequenza > frequenzaModa) {
            moda = parseInt(numero);
            frequenzaModa = frequenza;
        }
    });

    return moda!;
}

const numeri = [1, 2, 2, 3, 4, 4, 4, 5];
console.log(`La moda nell'array è: ${trovaModa(numeri)}`);
