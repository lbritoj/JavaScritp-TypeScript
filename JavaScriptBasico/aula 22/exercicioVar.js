let varA = 'A';
let varB = 'B';
let varC = 'C';
let varTemp;

varTemp= varA;
varA = varB;
varB = varC;
varC = varTemp;

// Ou [varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)