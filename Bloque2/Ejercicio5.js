function censo() {
    let totalpers = 0;
    let varones = 0;
    let mujeres = 0;
    let varonEdad = 0;

    let numDoc;
    do {
        numDoc = parseInt(prompt("Introduce tu número de documento (0 para finalizar)"));
        if (numDoc !== 0) {
            let edad = parseInt(prompt("Introduce tu edad"));
            let sexo = prompt("Introduce tu sexo (masculino o femenino)").toLowerCase();
            totalpers += 1;
            if (sexo == "masculino") {
                varones += 1;
                if (edad >= 16 && edad <= 65) {
                    varonEdad += 1;
                }
            } else if (sexo == "femenino") {
                mujeres += 1;
            } else {
                alert("El sexo es inválido, vuelve a introducirlo.");
            }
        }
    } while (numDoc !== 0);
    return "El número total de personas es de " + totalpers + "<br>" +
           "El número de varones es de " + varones + "<br>" +
           "El número de mujeres es de " + mujeres + "<br>" +
           "El número de varones con edad entre 16 y 65 es de " + varonEdad;
        }
let resultado = censo();
document.write(resultado);
