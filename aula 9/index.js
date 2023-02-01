let varA = 'a';
let varB = 'b';
let varC = 'c';

/*const varAT = varA;
varA = varB;
varB = varC;
varC = varAT;
*/
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);