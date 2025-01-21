function submitForm() {
            
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;

    
    alert(`Nombre: ${name}\nCorreo: ${email}\nComentarios: ${comments}`);
}