//Escreva uma função que verifique se o
//vetor de habilidades passsado possui a 
//habilidade "javascript" e retorna um booleano
//true/false caso exista ou não.

function temHabilidade(){
    var skill = prompt("Digite sua skill: ")
			
    if(skill.includes('javascript')) {
       alert(true);
     } else {
       alert(false);
     } 
  }
  
  var skill = ['javascript', 'reactjs', 'React native'];
  var resultado = temHabilidade();  