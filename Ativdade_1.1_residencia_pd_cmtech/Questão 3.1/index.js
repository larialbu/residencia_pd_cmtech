//Escreva um programa que calcule e mostre a tabuada 
//(até 10x) de um número qualquer, digitado pelo usuário.

var x = Number(prompt("digite um numero pra ver a sua tabuada: "))
for (cont = 1; cont<=10; cont++) {
    var valor = x*cont
    document.write( " ",x," * ",cont," = ",valor,'<br>');
}