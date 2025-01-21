function limpiar() {
    let limpiarclave = document.getElementById("clave");
    if (limpiarclave.value == " ") limpirarclave.value = " ";
  }
  function comprobar() {
    let comprobarclave = document.getElementById("clave");
    comprobarclave = comprobarclave.value;
    if (comprobarclave.length < 7) {
      alert("La contraseña introducida es menor que 7");
    } else if (comprobarclave.lenght > 20) {
      alert("La contraseña introducida es mayor que 20");
    } else {
      alert(
        "La contraseña introducida tiene mas de 7 caracteres y menos de 20 caracteres"
      );
    }
  }