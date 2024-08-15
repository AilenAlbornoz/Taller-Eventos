function saludar() {
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', (event) => { // Manejador para el botón
        event.stopPropagation(); // Evita que el evento se propague al div
    });

    document.querySelector('div').addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});