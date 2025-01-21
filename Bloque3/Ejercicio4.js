function concatenar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    document.getElementById('nombrecompleto').value = `${nombre} ${apellido}`;
}