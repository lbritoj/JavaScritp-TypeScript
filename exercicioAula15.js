/*
Leonardo Brito tem 28 anos, pesa 89kg tem 1.76 de altura e seu IMC é ...
Leonardo nasceu em 1995.
*/

const nome = 'Leonardo';
const sobrenome = 'Brito';
const idade = 28;
const peso = 89;
const alturaEmM = 1.76;
let imc; //peso / (altura * altura)
let anoNAscimento;
indiceMassaCorporal = (peso / (alturaEmM * alturaEmM));
anoNAscimento = 2023-idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNAscimento}`)