//Para um jogo, precisamos saber se um personagem morreu
//ou depois de sofrer um ataque. Faça uma função que +2 
//parâmetros, 'dano' e 'saude'. A função deve retornar '1' 
//se o dano for matar o personagem (ou seja, deixar sua 
//saúde menor ou igual a zero) e '0' caso contrário.

var dano = Number(prompt("digite seu dano:"));
var saude = Number(prompt("digite sua saude:"));
function PersonagemMorreu(dano, saude) {
    if(dano > saude){
        return 1;
    }
    else{
        return 0;
    } 
}
document.write(PersonagemMorreu(dano,saude));