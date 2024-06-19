import leia from "readline-sync"

var ano = leia.questionInt("Digite o ano desejado: ");

if (ano % 100 == 0 || ano % 400 == 0 ){
    console.log("Este ano nao e bisexto");
}else if(ano % 4 == 0 || ano % 100 == 0){
    console.log("O ano e bisexto");
}
