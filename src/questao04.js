import leia from "readline-sync"

var nota = leia.questionInt("Digite a sua nota: ");

if (nota < 6){
    console.log("Nota F");
} else if (nota >= 6 && nota < 7){
    console.log("Nota D");
} else if (nota >= 7 && nota < 8){
    console.log("Nota C");
} else if (nota >= 8 && nota < 9){
    console.log("Nota B");
} else if (nota >= 9 && nota <= 10){
    console.log("Nota A");
}
