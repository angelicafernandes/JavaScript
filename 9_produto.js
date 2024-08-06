//Programa pra pedir 2números inteiros e 1número real, calcular e mostrar:
//o produto do dobro do primeiro com metade do segundo;a soma do triplo do primeiro com o terceiro e o terceiro elevado ao cubo;   

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let num1 = parseInt(readline.questionInt("Insira o primeiro numero(inteiro):"));
let num2 = parseInt(readline.questionInt("Insira o segundo numero(inteiro):"));
let num3 = parseFloat(readline.question("Insira o terceiro numero(real):"));

let dobro = (num1*2)+(num2/2);
let triplo = (3*num1)+(num3);
let cubo = (num3**3);

console.log(`O produto do dobro de ${num1} com metade de ${num2}, é igual à:${dobro}`);
console.log(`A soma do triplo de ${num1.toFixed(2)} com ${num3.toFixed(2)}, é igual à: ${triplo.toFixed(2)}`); 
console.log(`O cubo de ${num3.toFixed(2)}, é igual à: ${cubo.toFixed(2)}`);








