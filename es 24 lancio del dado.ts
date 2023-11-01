function lancioDado(numeroFacce: number): number {
    return Math.floor(Math.random() * numeroFacce) + 1;
}

const numeroFacceDado = 6;
const risultatoLancio = lancioDado(numeroFacceDado);
console.log('Il dado ha mostrato: ' + risultatoLancio);