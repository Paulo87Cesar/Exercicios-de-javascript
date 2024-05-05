 /**
* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A        10%
B        15%
C        20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
  */
function salarioAtual(aumento){
    const salario = 2800
    const A = 0.10
    const B = 0.15
    const C = 0.20
    switch(aumento){
      
        case 'Plano A': 
        return "O meu novo salário é R$: " + ((salario * A) + salario)
        case 'Plano B':
        return "O meu novo salário é R$: " + ((salario * B) + salario)
        case 'Plano C':
        return "O meu novo salário é R$: " + ((salario * C) + salario)
        default: 
        return('O plano é inválido')   
    }
}
console.log(salarioAtual('Plano A'));
console.log(salarioAtual('Plano B'));
console.log(salarioAtual('Plano C'));
console.log(salarioAtual('Plano D'));