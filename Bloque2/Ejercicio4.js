function valor() {
    let resultado;
    let num;
    let acumulador = 0;
    do {
        num = parseInt(prompt("Introduce un valor (9999 para terminar)"));
        if (num == 9999) {
            resultado="El número introducido es 9999, por lo que se termina aquí.";
        }
        acumulador += num;
    }
     while (num !== 9999);
        acumulador=acumulador-9999
    if (acumulador > 0) {
        resultado = "El valor del acumulador es "+acumulador+" por lo que es mayor que 0";
    } else if (acumulador < 0) {
        resultado = "El valor del acumulador es"+acumulador+" por lo que es menor que 0";
    } else {
        resultado = "El valor del acumulador es"+acumulador+" por lo que es 0";
    }
    return resultado;
}
let resultados = valor();
document.write(resultados);