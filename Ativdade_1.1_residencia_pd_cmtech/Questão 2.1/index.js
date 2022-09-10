//Faça um programa que leia 2 números, alguns-os e exiba 
//uma mensagem com o resultado apenas se o resultado for maior que 100.

var x = Number(prompt("digite o primeiro numero:"));
var y = Number(prompt("digite o segundo numero:"));
var soma = x+y;

if(soma >100){
    document.write("Sua soma e maior que 100");
    } else {
        document.write("Sua soma e menor que 100");
    }