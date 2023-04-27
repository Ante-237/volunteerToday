// Define the URL of the API endpoint
const apiUrl = "http://localhost:8000/api/books/1";



const jokeElement = document.getElementById('test');
const newJokeButton = document.getElementById('but');

function fetchJoke() {
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => jokeElement.textContent = data.author)
        .then(error => console.error(error));
}

newJokeButton.addEventListener('click', fetchJoke);

// fetch a joke when the page loads
fetchJoke();


