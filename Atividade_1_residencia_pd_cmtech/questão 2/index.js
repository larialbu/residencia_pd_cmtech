//Crie uma função que dado um intervalo
//(entre x e y) exiba os números pares.

var pares = [];

function exibePar(x,y){
   while(x<=y){
      if((x%2)==0){
        pares.push(x);
      }
      x++    
   }
}
exibePar(0,20);
alert(pares);