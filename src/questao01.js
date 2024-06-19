import leia from "readline-sync"

var preco = leia.questionInt("Digite o valor de compra: ");

if (preco < 20){
    var venda = (preco + (preco * 0.45));
    console.log("O valor para revenda do produto e: " + venda);
}else {
    var venda = (preco + (preco * 0.30));
    console.log("O valor para venda e de: " + venda);
}
