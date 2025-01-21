function num(){
    let resultado
    let num
    let areaCua=0
    num=parseInt(prompt("Introduce el lado de un cuadrado"))
    areaCua=(num*num)*2;
    
    return "El area de un cuadrado cuyo lado es "+num+" es "+areaCua;
}
let resultado=num();
document.write(resultado)