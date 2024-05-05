/**02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais.
 *  Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três
 *  lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */

function tipoTriangulo (L1, L2, L3){
    if (L1 === L2  && L2 === L3) {
      return'O triangulo é Equilátero' // com return 
    }
    else if
        (L1 === L2 || L1 === L3 || L2 === L3) 
            console.log('O triangulo é Isóceles')
    
    else{
        (console.log('O triangulo é Escaleno'))
    }
}
 
console.log(tipoTriangulo(3, 3, 3))
tipoTriangulo(3, 3, 2)
tipoTriangulo(3, 1, 2)