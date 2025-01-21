function almacenarvalores(acumulador) {
    for (let f = 0; f < acumulador.length; f++) {
        let v = prompt("Introduce un valor");
        acumulador[f] = parseInt(v); 
    }
    return acumulador;
}

function imprimirvalores(acumulador) {
    let vectores36 = 0, vectores50 = 0, acumulado = 0;

    for (let f = 0; f < acumulador.length; f++) {
        let valor = acumulador[f];
        acumulado += valor; 

        if (valor > 36) {
            vectores36++; 
        }
        if (valor > 50) {
            vectores50++; 
        }
    }
    let resultado = `El valor acumulado de todos los elementos es: ${acumulado}.<br>`;
    resultado += "Los valores mayores a 36 son: "+vectores36+".<br>";
    resultado += "Los valores mayores a 50 son: "+vectores50+".<br>";

    return resultado;
}
let acumulador = new Array(8); 
almacenarvalores(acumulador); 
let final = imprimirvalores(acumulador); 
document.write(final); 