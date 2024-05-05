/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
 *  de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de 
 *  juros simples e a segunda retornará o valor da aplicação sob o regime de
 *  juros compostos.
 */

function jurosSimples(ci, tj, t,){
    const montante = (ci * (tj / 100) * t) + ci 
    return montante
} 
console.log('Montante com juros simples: ' + jurosSimples(1000, 5, 3))

function jurosComposto(ci, tj, t,){
    const taxaDecimal = tj / 100
    const montanteTotal = ci * (1 + taxaDecimal) ** t
    return montanteTotal
}
console.log('Montante com juros simples: ' + jurosComposto(1000, 5, 3)) 