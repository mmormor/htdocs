function verificarEdad() {
    let mayorEdad = document.getElementById("mayor18").checked;
    if (mayorEdad) {
        alert("Puedes ingresar al sitio.");
    } else {
        alert("No puedes ingresar al sitio.");
    }
}