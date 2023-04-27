const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('but');

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const urlConst = 'http://127.0.0.1:8000/api/personal';

function validateEmail(email) {
    // regular expression for validating email addresses
    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/;
    return emailRegex.test(email);
}

function submitForm(event) {
    event.preventDefault();

    const nameV = name.value;
    const emailV = email.value;
    const messageV = message.value;

    // validate email address using regex
    if(!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const data = {
        name: nameV,
        email: emailV,
        info: messageV
    };

    fetch(urlConst, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // make a POST request to the API endpoint using AJAX
    /*
    const xhr = new XMLHttpRequest();
    xhr.open('POST', urlConst);
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

    const requestBody = JSON.stringify({ nameV, emailV, messageV });
    xhr.send(requestBody);
    */
}

submitButton.addEventListener('submit', submitForm);