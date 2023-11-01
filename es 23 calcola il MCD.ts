function trovaMCD(num: number, num2: number): number {
    if (num2 === 0) {
        return num;
    }
    return trovaMCD(num2, num % num2);
}

const numero1 = 48;
const numero2 = 18;
const mcd = trovaMCD(numero1, numero2);
console.log(`Il Massimo Comun Divisore tra ${numero1} e ${numero2} è ${mcd}`);
