function trovaElementiComuni<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(elemento => array2.includes(elemento));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const elementiComuni = trovaElementiComuni(array1, array2);
console.log('Elementi comuni nei due array:');
console.log(elementiComuni);
