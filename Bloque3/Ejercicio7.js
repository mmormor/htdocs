function mostrarDeportes() {
    let deportesSeleccionados = [];
    if (document.getElementById("futbol").checked) {
        deportesSeleccionados.push("Fútbol");
    }
    if (document.getElementById("baloncesto").checked) {
        deportesSeleccionados.push("Baloncesto");
    }
    if (document.getElementById("tenis").checked) {
        deportesSeleccionados.push("Tenis");
    }

    alert("Deportes seleccionados: " + deportesSeleccionados.join(", "));
}