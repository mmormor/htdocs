function mostrarPrecio() {
    let pizzaSeleccionada = document.getElementById("pizza").value;
    let precio;
    switch(pizzaSeleccionada) {
        case "1":
            precio = "$4";
            break;
        case "2":
            precio = "$6";
            break;
        case "3":
            precio = "$10";
            break;
    }
    document.getElementById("precio").value = precio;
}