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

//let nome = prompt("Qual é o seu nome?");

//const saudacao = "Seja Bem Vindo"

//console.log(`Olá, ${nome}!`)

//### Soma de dois números
//Ler 2 números, somar e mostrar com 2 casas decimais.
//Crie um programa que peça **dois números ao usuário**, calcule a soma deles e mostre o resultado formatado com **duas casas decimais**
//Exemplo: Se o usuário digitar `10` e `5.5`, o programa deve mostrar
//A soma é 15.50

//const numero1 = Number(prompt("Digite o primeiro número"));
//const numero2 = Number(prompt("Digite o segundo número"));

//const soma = numero1 + numero2;

//console.log(`sua soma é igual a ${soma.toFixed(2)}`)

//### Centímetros em polegadas
//Converter cm -> in (1 in = 2,54 cm)
//Elabore um programa que leia um valor em **centímetros** e converta para **polegadas**
//Considere a fórmula
//`1 polegada = 2,54 centímetros`
//Mostre o resultado com **duas casas decimais**

// const centimetros = Number(prompt("digite o valor em centímetros"));

//const converter = centimetros / 2.54;

//console.log(`o valor em polegadas é de ${converter.toFixed(2)}`);

//Converter anos em meses, dias, horas e minutos.
//Faça um programa que leia a *idade de uma pessoa em anos e mostre a mesma idade aproximada em
// - Meses
// - Dias
// - Horas
// - Minutos
// ** 365 dias por ano ** como simplificação

//Entrada
//const anos = Number(prompt("idade em anos"));

//Processamento
//const meses = anos * 12;

//const dias = meses * 365;

//const horas = dias * 24;

//const minutos = horas * 60;

//Saída
//console.log(`Você tem ${anos} anos, que corresponde aproximadamente a ${meses} Meses, ${dias} Dias, ${horas} Horas, ${minutos} Minutos.`);


// Média Aritmética

//Ler 3 notas e calcular média.

//Faça um programa que leia **três notas** de um aluno, calcule a **média aritmética** e mostre o resultado com **uma casa decimal**

//Exemplo:
// Notas `7`,`8`,`9` -> Média = `8.0` //

//const media1 = Number(prompt("Digite a primeira nota"));
//const media2 = Number(prompt("Digite a segunda nota"));
//const media3 = Number(prompt("Digite a terceira nota"));

//const calcularMedia = (media1 + media2 + media3) / 3;

//console.log(`A sua média é ${calcularMedia.toFixed(1)}`)

//### Conversor BRL -> USD com vírgula
//Elaborar um programa que peça ao usuário:

//1. Um valor em reais **BRL**


//const brlStr = prompt("Valor em BRL (use a vírgula)");
//const usdRate = Number(prompt("Cotação em dólar:"));

//const brl = Number(brlStr.replace("," , "."));
//const usd = brl / usdRate;

//console.log(`R$ ${brl.toFixed(2)} = US$ ${usd.toFixed(2)}`)

//## Tempo total em segundos

//Escreva um programa que leia em tempo no formato **hh:mm:ss**
//(horas, minutos e segundos) e converta tudo para **segundos totais**

//const t = prompt("Digite o tempo (hh:mm:ss):");
//const [hh, mm, ss] = t.split(":").map(Number);
//const total = hh * 3600 + mm * 60 + ss;

//console.log(`${t} = ${total} segundos`);

//const idade = Number(prompt("Sua idade:"));

//if (Number.isNaN(idade) || idade < 0){
//    console.log("Idade Inválida");
//}else{
//    if (idade >=18) {
//        console.log("Maior de idade");
//    } else {
//        console.log("Menor de idade");
//    }
//}

//const temp = Number(prompt("Temperatura atual (c):"));

//if (Number.isNaN(temp)) {
//    console.log("Valor Inválido");
//} else if (temp < 0) {
//    console.log("Muito frio!");
//} else if (temp <= 20){
//    console.log("Frio");
//} else if (temp <= 30) {
//    console.log("Agradável");
//} else {
//    console.log("Quente");
//}


//const dinheiro = Number(prompt("Dinheiro na carteira:"));
//const temCartao = prompt("Tem cartão? (s/n)") === "s";

//if ((dinheiro >= 10 || temCartao) && dinheiro >= 0) {
//    console.log("Você consegue comprar o lanche");
//} else {
//    console.log("Não vai rolar agora!");
//}

//Navegação:
//const logado = true;
//if (!logado){
// console.log("Faça login.");
//}

//Operadores Ternários cond ? x : y

//condição ? valorSeVerdadeiro : ValorSeFalso

/*
const idade = Number(prompt("Digite sua idade:"));
const tipo = idade >= 18 ? "maior de idade" : "menor de idade";

let tipo2;
if (idade >= 18) {
    tipo2 = "maior de idade";
} else {
    tipo2 = "menor de idade";
}
*/

/*
const n = Number(prompt("Digite um número"));
const tipo = n > 0 ? "positivo" : (n < 0 ? "negativo" : "zero");
*/

// Exemplo 3
//Nota(aprovado ou reprovado)

/*
const nota = Number(prompt("Digite sua nota"));
if (nota >=6) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado");
}
*/

/*
const nota = Number(prompt("Digite sua nota"));
const resultado = nota >=6 ? "Aprovado" : "Reprovado";
console.log(`Resultado: ${resultado}`);
*/

//Exemplo 4
/*
const a = 10, b = 20;
console.log(a > b ? "a é maior" : "b é maior ou igual");
*/

//Switch

/*
const dia = prompt("Dia da semana (seg, ter, qua, qui, sex, sab, dom)");

switch (dia) {
    case "seg":
    case "ter":
    case "qua":
    case "qui":
    case "sex":
        console.log("Dia útil");
        break;
    case "sab":
    case "dom":
        console.log("Fim de semana");
        break;
    default:
        console.log("Dia Inválido");

}
*/

//### Semáforo (if/else if/else)
// cor do semáforo (`"Verde"`,`"Amarelo"`,`"Vermelho"`) e diga a ação

/*
const semaforo = prompt("Diga a cor do semáforo (Verde, Amarelo, Vermelho):");
if (semaforo === "verde") {
    console.log("Siga")
    } else if (semaforo === "Amarelo"){
        console.log("Atenção, tome cuidado ao passar")
    }else if (semaforo === "Vermelho"){
        console.log("Pare")
    } else {
        console.log("Cor inválida")
    }
*/

//### Status da nota (else if + validação)

//Você deve criar um programa que leia uma nota de 0 a 100 e mostre o status do aluno conforme as regras:
// Se a nota for menor do que 60 -> "Reprovado"
// Se a nota for de 60 até 79 -> "Recuperação"
// Se a nota for de 80 até 100 -> "Aprovado"
// Se a nota for inválida (não for número, ou estiver fora do intervalo 0-100), mostrar "nota inválida"

const nota = Number(prompt("Digite sua nota"));
if (Number.isNaN(nota) || nota < 0 || nota > 100){
        console.log("Nota inválida");
    } else if (nota < 60){
        console.log ("Você está reprovado!");
    } else if (nota < 80) {
        console.log("Você está em recuperação");
    } else {
        console.log("Aprovado");
    }