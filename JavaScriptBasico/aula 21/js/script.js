// alert('Com a nossa mensagem.')

// const confirma = window.confirm('Deseja realmente apagar?')

// console.log(confirma)

// tudo que é retornado pela função prompt é uma string. É necessário converter para numero.

let num1 = prompt('Digite um número');
num1 = Number(num1);
let num2 = prompt('Digite outro número');
num2 = Number(num2);
const resultado = num1  + num2;
// window.alert(`O resultado da sua conta é ${resultado}`);
alert(`O resultado da sua conta é ${num1+num2} e foi calculado com template strings`);
console.log(typeof  num1);
console.log(typeof num2);