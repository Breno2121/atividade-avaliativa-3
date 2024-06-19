import leia from "readline-sync"


var nota1 = leia.questionInt("Digite a nota 1: ");
var peson1 = leia.questionInt("Digite o peso da nota 1: ");
var nota2 = leia.questionInt("Digite a nota 2: ");
var peson2 = leia.questionInt("Digite o peso da nota 2: ");
var nota3 = leia.questionInt("Digite a nota 3: ");
var peson3 = leia.questionInt("Digite o peso da nota 3: ");

var soma = ((nota1 * peson1) + (nota2 * peson2) + (nota3 * peson3));
var pesos = (peson1 + peson2 + peson3);
var media = (soma / pesos);

console.log("Media poderada sera: " + media);
