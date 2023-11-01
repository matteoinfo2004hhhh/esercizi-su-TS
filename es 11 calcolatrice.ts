function generaNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let matrice: number[][] = [];
  let pari = 0;
  let dispari = 0;
  
  for (let i = 0; i < 10; i++) {
    matrice[i] = [];
    for (let j = 0; j < 10; j++) {
      matrice[i][j] = generaNum(1, 1000);
    }
  }
  
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      if (matrice[i][j] % 2 === 0) {
        pari++;
      } else {
        dispari++;
      }
    }
  }
  
  console.log('Numeri pari nella matrice: ' + pari);
  console.log('Numeri dispari nella matrice: ' + dispari);