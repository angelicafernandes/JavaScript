//PROGRAMA PARA CALCULAR A MÉDIA ARITMÉTICA, PONDERADA E A NOTA PARA A FINAL 


const readline = require ('readline-sync');

let nota1 = parseInt(readline.question("DIGITE QUAL FOI SUA PRIMEIRA NOTA:"));
let nota2 = parseInt(readline.question("DIGITE QUAL FOI SUA SEGUNDA NOTA:"));
let media_ari = (nota1 + nota2) / 2;
let media_pond = ((nota1 * 6) + (nota2 * 4))/2;


function menu_notas(media_ari, media_pond, falta_final) {

//====================================CÁLCULO PARA SABER SE VAI PRA FINAL
if (media_ari < 6)   {
    let falta_final = (10 - media_ari);
}   else {
    console.log("VOCÊ ESTÁ APROVADO");
    menu_notas(media_ari, media_pond, falta_final);
}




function menu_notas(media_ari, media_pond, falta_final);


