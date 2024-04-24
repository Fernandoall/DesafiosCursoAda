const prompt = require("readline-sync");

// let i;

// for (expressao 1; expressao 2; expressao 3) {

// }

// for (let i = 0; i < 5; i += 2) {
//   console.log(i);
// }

// Testando número maior.
let maiorNumero = 0;
let numeroInformado = 0;

for (let i = 0; i < 5; i++) {
  numeroInformado = Number(prompt.question("Informe um numero positivo: "));

  if (numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado;
  }
}

console.log("Maior numero:", maiorNumero);

// while (true) {
//   numeroInformado = Number(prompt.question("Informe um numero: "));
//   if (numeroInformado < 0) {
//     console.log(numeroInformado, "Numero invalido");
//     resposta = prompt.question("Dejesa continuar? ");
//     if (resposta === "sim" || resposta === "Sim" || resposta === "Ok") {
//       continue;
//     } else {
//       console.log("Ok, o sistema foi interrompido");
//       break;
//     }
//   }
// }

//  Exemplo: Percorrendo strings com o for

// const nome = "Laura";

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
//   if (i === 3) break;
// }
