/**
 12) Faça um algoritmo que calcule o fatorial de um número.
 */

 function calcularFatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplo de uso da função
const numeroParaCalcularFatorial = 3;
const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);

console.log(`O fatorial de ${numeroParaCalcularFatorial} é: ${resultadoFatorial}`);
