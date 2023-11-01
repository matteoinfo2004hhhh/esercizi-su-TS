function trovaSottosequenzaComune(s1: string, s2: string): string {
    const lunghezza1 = s1.length;
    const lunghezza2 = s2.length;
    const dp: number[][] = [];

    for (let i = 0; i <= lunghezza1; i++) {
        dp[i] = [];
        for (let j = 0; j <= lunghezza2; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let i = lunghezza1;
    let j = lunghezza2;
    let sottosequenza = '';

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            sottosequenza = s1[i - 1] + sottosequenza;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return sottosequenza;
}

const s1 = 'ABCD';
const s2 = 'ACDF';
console.log(`Sottosequenza comune più lunga: ${trovaSottosequenzaComune(s1, s2)}`);
