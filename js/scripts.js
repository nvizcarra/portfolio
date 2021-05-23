// Tomar datos de inputs y textarea
// Object creation
const formData = {
    inputName: '',
    inputEmail: '',
    inputMessage: ''
}

// Variables
const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');
const inputMessage = document.querySelector('#inputMessage');

// Input events
inputName.addEventListener('input', readText);
inputEmail.addEventListener('input', readText);
inputMessage.addEventListener('input', readText);

// function
function readText(e) {
    formData[e.target.id] = e.target.value;

    console.log(formData);
}

// Submit Event
const contactForm = document.querySelector('#contact__form');
contactForm.addEventListener('submit', function(evento) {
    evento.preventDefault();

    console.log('Form sent');
});