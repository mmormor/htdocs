function pizzas(){
    let seleccion = document.getElementById('select1');
    document.getElementById('texto1').value = seleccion.options[seleccion.selectedIndex].value;   
}
function cantidad(){
    let seleccion = document.getElementById('select2');
    document.getElementById('texto2').value = seleccion.options[seleccion.selectedIndex].value;
}
function precio(){
    let seleccion = document.getElementById('select1');
    let precio = seleccion.options[seleccion.selectedIndex].value;
    let cantidad = document.getElementById('texto2').value;
    let total = precio*cantidad
    document.getElementById('texto3').value = total;}