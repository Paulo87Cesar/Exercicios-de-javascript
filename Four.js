/**
 *  04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
    e o resto da divisão destes dois valores.
 */
    function divisaoComResto(dividendo, divisor) {
        if (divisor === 0) {
            console.log("Não é possível dividir por zero.");
        } else {
            const resultado = Math.floor(dividendo / divisor); // Resultado da divisão
            const resto = dividendo % divisor; // Resto da divisão
    
            console.log(`Resultado da divisão: ${resultado}`);
            console.log(`Resto da divisão: ${resto}`);
        }
    }
    
    // Exemplo de uso da função
    divisaoComResto(10, 3);
    