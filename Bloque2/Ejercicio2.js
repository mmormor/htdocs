function multiplo() {
    let resultado = ""; 

    for (let num = 8; num <= 500; num=num+8) { 
        
        if(num==496)
        resultado = resultado+ num+""; 
    else 
    resultado=resultado+num+"-"
}
    return resultado;
}

let resultados = multiplo();
document.write(resultados);