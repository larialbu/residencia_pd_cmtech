//Faça uma função que recebe a média final de um aluno 
//por parâmetro e retorna o seu conceito, conforme a tabela abaixo:

//Nota - conceito
//de 0,0 a 4,9 - D
//de 5,0 a 6,9 - C
//de 7,0 a 8,9 - B
//de 9,0 a 10,0 - A

function notas(nota) {
    var nota = Number(prompt("digite sua nota:"));
    if (nota >= 0.0 &&  nota <=4.9) {
        var notaF = "sua nota e D";
    } 
    else if (nota >= 5.0 &&  nota <=6.9){
        var notaF = "sua nota e C";
    }
    else if (nota >= 7.0 &&  nota <=8.9) {
        var notaF = "sua nota e B";
    }
    else{
       var notaF = "sua nota e A"
    }
    return notaF
}
    document.write(notas());