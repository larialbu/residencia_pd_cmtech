function gerar(){
    let frutas = ["Maça", "Banana", "Uva", "Abacaxi"];
    let lista = document.getElementById('lista');
    for(var i = 0; i < frutas.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(frutas[i]));
        lista.appendChild(item);
    }
}

var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar
function exibir() {
    document.getElementById("quadrados").style.display = "block";
}
function ocultar() {
    document.getElementById("quadrados").style.display = "none";
}
function ocultarExibir() { // Quando clicar no botão.

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("quadrados").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("quadrados").style.display = "block";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }
}