/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/ 

function operacoesMatematicas(valor1, valor2) {
    // Soma
    const soma = valor1 + valor2;
    console.log(`Soma: ${soma}`);

    // Subtração
    const subtracao = valor1 - valor2;
    console.log(`Subtração: ${subtracao}`);

    // Multiplicação
    const multiplicacao = valor1 * valor2;
    console.log(`Multiplicação: ${multiplicacao}`);

    // Divisão
    const divisao = valor1 / valor2;
    console.log(`Divisão: ${divisao}`);
}

// Exemplo de uso da função
operacoesMatematicas(10, 5);