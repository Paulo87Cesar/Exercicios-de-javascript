/**
 * 11) As regras para o cálculo dos anos bissextos são as seguintes: De 
 * 4 em 4 anos é ano bissexto; De 100 em 100 anos não é ano bissexto; De 
 * 400 em 400 anos é ano bissexto; Prevalecem as últimas regras sobre as 
 * primeiras. Partindo daí elabore uma função que recebe um ano e calcula 
 * se ele é ano bissexto, imprimindo no console a mensagem e retornando 
 * true ou false.
 */
    function ehAnoBissexto(ano) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
          console.log(`${ano} é um ano bissexto.`);
          return true;
        } else {
          console.log(`${ano} não é um ano bissexto.`);
          return false;
        }
      }
      
      // Exemplos de uso da função
      ehAnoBissexto(2000);  // Ano bissexto (divisível por 400)
      ehAnoBissexto(2020);  // Ano bissexto (divisível por 4 e não por 100)
      ehAnoBissexto(2100);  // Não é um ano bissexto (divisível por 100, mas não por 400)
      ehAnoBissexto(2022);  // Não é um ano bissexto (não divisível por 4)
      
