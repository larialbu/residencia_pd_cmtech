//Escreva uma função que dado um total de anos
//retorna o quão experiente o usuário é:

function experiencia(anos) {
    
    if (anos >= 0 &&  anos <=1) {
        var xp = "iniciante";
    } 
    else if (anos >= 1 &&  anos <=3){
        var xp = "Intermediario";
    }
    else if (anos >= 3 &&  anos <=6) {
        var xp = "Avançado";
    }
    else{
       var xp = "Jedi master"
    }
    return xp
}
    alert(experiencia(7));