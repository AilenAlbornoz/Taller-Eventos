function saludar() {
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', (event)=>{
 document.querySelector('button').addEventListener('click', function() {
    alert('Hola! Soy el div');
 });
});