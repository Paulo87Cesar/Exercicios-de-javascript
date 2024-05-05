/**
 * 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function calcularCedulas(valor) {
    if (valor <= 0) {
      console.log('Por favor, insira um valor válido maior que zero.');
      return;
    }
  
    const cedulas = [100, 50, 10, 5, 1];
    let quantidadeCedulas;
  
    console.log(`Para o valor de R$${valor}:`);
  
    for (let cedula of cedulas) {
      quantidadeCedulas = Math.floor(valor / cedula);
      if (quantidadeCedulas > 0) {
        console.log(`${quantidadeCedulas} nota(s) de R$${cedula}.`);
        valor = valor % cedula; // Atualiza o valor restante
      }
    }
  }
  
  // Exemplo de uso
  calcularCedulas(18);