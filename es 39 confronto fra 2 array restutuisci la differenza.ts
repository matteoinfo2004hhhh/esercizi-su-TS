function trovaDifferenzaArray(array1: number[], array2: number[]): number[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const differenza: number[] = [];

    set1.forEach(num => {
        if (!set2.has(num)) {
            differenza.push(num);
        }
    });

    return differenza;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log('Differenza tra i due array:');
console.log(trovaDifferenzaArray(array1, array2));
