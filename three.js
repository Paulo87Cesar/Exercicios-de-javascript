/** Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/


function calcularPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

// Exemplo de uso da função
const base = 2;
const expoente = 3;
const resultado = calcularPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);

/**
 * function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))
 */