import leia from "readline-sync"

var lado1 = leia.questionInt("Digite a medida do lado 1: ");
var lado2 = leia.questionInt("Digite a medida do lado 2: ");
var lado3 = leia.questionInt("Digite a medida do lado 3: ");

var AB = (lado1 + lado2); 
var BC = (lado2 + lado3);
var CA = (lado3 + lado1);

if (lado1 < AB && lado2 < BC && lado3 < CA){
    console.log("Triangulo valido");
}else {
    console.log("TRIANGULO INVALIDO!");
}

if ( lado1 == lado2 && lado2 == lado3){
    console.log("Triangulo Equilatero");
}else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    console.log("Triangulo Isosceles");
}else {
    console.log("Triangulo Escaleno");
}
