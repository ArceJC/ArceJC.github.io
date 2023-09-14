// Validación del formulario
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Formulario enviado con éxito.');
        form.reset();
    }
});
