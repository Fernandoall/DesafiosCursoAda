const fs = require("fs");
const { promiseHooks } = require("v8");

// *  1. Callbacks

// console.log("Antes de ler o arquivo..");
// // Função Assincrona (ler um arquivo leva um tempo)
// fs.readFile("Aula 13/arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo", erro);
//   } else {
//     console.log(String(conteudoDoArquivo));
//   }
// });

// console.log("Depois da função de ler o arquivo. ");

// Exemplo 2: SetTimeout (função que cria um timer)

// console.log("Antes do SetTimeOut");

// setTimeout(() => {
//   console.log("Isso vai ser executado após dois segudnos ");
// }, 2 * 1000);

// * 2. Promessas:

// console.log("Antes de executar a promessa");

function lerAquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("Aula 13/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
} // Criando uma Promessa

// // Foco a partir de aqui
// lerAquivoPromisse()
//   .then((valorResolvido) => {
//     console.log("Deu certo: ", valorResolvido);
//   })
//   .catch((erro) => {
//     console.log("Deu errado..."), erro;
//   })
//   .finally(() => {
//     console.log("Isso daqui será executado");
//   });

// console.log("Depois de executar a promessa");

// * 3. Async/await

async function leituraDeDados() {
  console.log("Isso é executado antes da promisse ser resolvida ");

  try {
    const dadosDoAquivoLido = await lerAquivoPromise();

    console.log(dadosDoAquivoLido);
    console.log("Isso é executado antes da Promise ser executada.");
  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promise (com erro).");
  } finally {
    console.log("Finalizou!");
  }
}

leituraDeDados();
