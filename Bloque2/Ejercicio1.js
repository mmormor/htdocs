let palabra=prompt("Introduce una palabra para traducirla al ingles")
function tradpalabra()

{   let resultado
    switch(palabra){
        case "mesa":
            resultado=palabra+" en ingles es table";
            break;
        case "perro":
            resultado=palabra+" en ingles es Dog";
            break;
        case "gato":
            resultado=palabra+" en ingles es Cat";
            break;
        case "casa":
            resultado=palabra+" en ingles es House"
            break;
            default:
                resultado="Introduce una palabra que sea Mesa.Gato,Perro o Casa"
    }
    return resultado
}


let resultados=tradpalabra();
document.write(resultados)