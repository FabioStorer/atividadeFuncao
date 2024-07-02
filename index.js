const funcao = require('./funcoes');
const prompt = require('prompt-sync')();

console.log('Vou calcular para você a área de um dos items abaixo. Escolha pelo índice o que desejar:');
console.log(1+'.', 'Círculo');
console.log(2+'.', 'Triângulo');
console.log(3+'.', 'retângulo');
let opcao = prompt('Qual área deseja calcular? ');

if (opcao == 1) {
    let input = prompt('Digite o raio do círculo: ');
    funcao.areaCirculo(input)
} else if (opcao == 2) {
    let base = prompt('Digite a base do triângulo: ');
    let altura = prompt('Digite a altura do triângulo: ');
    funcao.areaTriangulo(base, altura); 
} else if (opcao == 3) {
    let base = prompt('Digite a base do retângulo: ');
    let altura = prompt('Digite a altura do retângulo: ');
    funcao.areaRetangulo(base, altura);
} else {
    console.log('Opção inválida.');
}