function trovaMaggioreNumero(numeri: number[]): number {
    return Math.max(...numeri);
}

const numeri = [3, 7, 2, 9, 5];
console.log(`Il maggior numero nell'array è: ${trovaMaggioreNumero(numeri)}`);
