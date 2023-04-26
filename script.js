const contactForm = document.getElementById('contact-form');

function validateEmail(email) {
    // regular expression for validating email addresses
    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/;
    return emailRegex.test(email);
}

function submitForm(event) {
    event.preventDefault();

    const name = contactForm.elements.name.value;
    const email = contactForm.elements.email.value;
    const message = contactForm.elements.message.value;

    // validate email address using regex
    if(!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // make a POST request to the API endpoint using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:8080/api/personal');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Thank you for reaching out!');
            // clear the form after successful submission
            contactForm.reset();
        } else {
            alert('An error occured. Please try again later.');
        }
    };
    const requestBody = JSON.stringify({ name, email, message });
    xhr.send(requestBody);
}

contactForm.addEventListener('submit', submitForm);