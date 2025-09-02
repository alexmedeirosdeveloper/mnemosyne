// NaN e infinity

//Divisão por 0
console.log(5 / 0)

console.log("abc" * 3)

console.log(NaN === NaN) //NaN nunca é igual a ele mesmo

const nomeCompleto = "Lucas Lacerda";

console.log(nomeCompleto.length)
console.log(nomeCompleto.toUpperCase());
console.log(`Olá, ${nomeCompleto} !`)


//Operadores
// + - * / % **
// == compara só valores, === compara valor e tipo

console.log(2 + 3 * 4);
console.log(1 + "2");
console.log(5 == "5");
console.log(5 === "5");
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);


console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

//IMC Índice de Massa Corporal

//Entrada
//const peso = Number(prompt("Peso (kg):"));
//const altura = Number(prompt("Altura (m):"));

//Processamento
//const imc = peso / (altura ** 2);

//Saída
//console.log(`IMC: ${imc.toFixed(2)}`)

//Celsius -> Fahrenheit

// Entrada
//const c = Number(prompt("Celsius"));

//Processamento
//const f = (c * 9/5) +32;

//console.log(`${c}C = ${f.toFixed(1)}F`)

//Saudação simples
//Perguntar o nome e exibir "Olá, [nome] !"
//Escreva um programa que pergunte o **nome** do usuário e mostre na tela uma mensagem de saudação personalizada no formato:

let nome = prompt("Qual é o seu nome?");

const saudacao = "Seja Bem Vindo"

console.log(`Olá, ${nome}!`)
