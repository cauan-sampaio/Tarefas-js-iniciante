let num = 0.7;
let num1 = 0.1;
num += num1;
num += num1;
num += num1;
num = parseFloat(num.toFixed(2));//Transformando o número float em inteiro
console.log(num);
console.log(Number.isInteger(num));
//console.log(num.toString() + num1); Converte o number para uma string, só nesta situação
//num = num.toString(); converte a váriavel para uma string a partir daqui
//console.log(num.toString(2));representação em binário
//console.log(num.toFixed(3)); Arrendoda o valor quebrado, 12.334 será a saida
//console.log(isInteger(num)); indentifica se o dado é  inteiro, retornando verdadeiro ou falso
// let temp = num * 'ola'
//console.log(num.isNan(temp)); retorna se a conta é calculavel.
