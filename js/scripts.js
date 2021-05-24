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
    // evento.preventDefault();

    // Form validation with destructuring
    const { inputName, inputEmail, inputMessage } = formData;

    if(inputName === '' || inputEmail === '' || inputMessage === '') {
        showError('Please complete all fields');

        return;
    } else return messageSent('Your message has been sent');

    // Form Sent

    console.log('Form sent');
});

// Show error function
function showError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    contactForm.appendChild(error);

    // Error fadeout
    setTimeout(() => {
        error.remove();
    }, 3000);
}

// Show success message function
function messageSent(mensaje) {
    const success = document.createElement('P');
    success.textContent = mensaje;
    success.classList.add('success');

    contactForm.appendChild(success);

     // Message fadeout
     setTimeout(() => {
        success.remove();
    }, 4000);
}