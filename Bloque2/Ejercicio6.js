function multi(){
    let resultado="";
    let num
    let valor
    let multipli
    num=parseInt(prompt("Introduce un valor entre el 1 y el 10"))
    if (num>=1 && num<=10){
    for(valor=0;valor<=12;valor++){
    resultado+=num+"x"+valor+"="+num*valor+"<br>"
        
    }}else{resultado="Debes de introducir un numero entre 1 y 10"}
    return resultado;
}
let resultado=multi();
document.write(resultado);