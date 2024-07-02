function areaCirculo(input) {
    let pi = 3.14;
    let areaC = pi * input ** 2;
    console.log('A área do círculo fornecido é de', areaC, '.');
}

function areaTriangulo(base, altura) {
    let areaT = (base * altura) / 2;
    console.log('A área do triângulo fornecido é de', areaT, '.');
}

function areaRetangulo(base, altura) {
    let areaR = base * altura;
    console.log('A área do retângulo fornecido é de', areaR, '.');
}

module.exports = {
    areaCirculo,
    areaTriangulo,
    areaRetangulo
};