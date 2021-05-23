// Evento de submit
const formulario = document.querySelector('.contact__form');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    console.log('Enviado formulario');
});