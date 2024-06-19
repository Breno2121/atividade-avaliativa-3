import leia from "readline-sync"

console.log("Digite a quantidade de horas trabalhadas: ");
var HT = leia.questionInt();

console.log("Digite o valor da hora trabalhada: ");
var VH = leia.questionInt();

console.log("Digite o percentual a ser descontado: ");
var desc = leia.questionInt();

var SB = (HT * VH);
var PD = (desc / 100);
var DE = (SB * PD);
var SL = (SB - DE);

console.log("Seu salario liquido sera: R$" + SL);
