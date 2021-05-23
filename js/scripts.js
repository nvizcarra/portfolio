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

    // Form validation with destructuring
    const { inputName, inputEmail, inputMessage } = formData;

    if(inputName === '' || inputEmail === '' || inputMessage === '') {
        showError('You must complete all fields');

        return;
    }

    // Form Sent

    console.log('Form sent');
});

// Show error function
function showError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    contactForm.appendChild(error);
}