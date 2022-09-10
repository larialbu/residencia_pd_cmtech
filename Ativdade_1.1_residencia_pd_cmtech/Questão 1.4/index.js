//Faça um programa que leia do usuário uma 
//temperatura em Fahrenheit, converta-a para 
//graus Celsius e escreva o novo valor na tela.
//Exemplo de conversão de Fahrenheit (F) para 
//Celsius é C = ( ( F - 32 ) * 5 ) / 9. 100 Fahrenheit = 37,77 Celsius.

var F;
F = Number (prompt ("digite uma temperatura em fahrenheit para ser convertida em celsius:"));
var c = ( ( F - 32 ) * 5 ) / 9;
document.write(c);