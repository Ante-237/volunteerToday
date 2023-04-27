// Define the URL of the API endpoint
/*
const apiUrl = "http://localhost:8000/api/events?ordering=-datePlace";


const jokeElement = document.getElementById('test');
const cardHeading = document.getElementById('headingOne');
const cardHeadingTwo = document.getElementById('headingTwo');
const cardHeadingThree = document.getElementById('headingThree');

const newJokeButton = document.getElementById('but');

function fetchJoke() {
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            cardHeading.textContent = data[0].title;
            cardHeadingTwo.textContent = data[1].title;
            cardHeadingThree.textContent = data[2].title;
        })
        .then(error => console.error(error));
}

newJokeButton.addEventListener('click', fetchJoke);

// fetch a joke when the page loads
fetchJoke();
*/

const eventsList = document.getElementById('grid-container-id');
const newJokeButton = document.getElementById('but');
const ourEndpoint = 'http://127.0.0.1:8000/api/events?ordering=-datePlace';

function displayEvents(events) {
    // clear existing events from the list 
    eventsList.innerHTML = '';

    // add each event to the list as a new <li> element
    events.forEach(event => {
    // creating the cardview for addition of resources
    const cardView = document.createElement('div');
    cardView.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.src = event.imageSource;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h2');
    title.textContent = event.title;
    // title.textContent = "Test"

    const requirements = document.createElement('p');
    requirements.textContent = event.requirement;
    //requirements.textContent = 'requirements';

    const Place = document.createElement('p2');
    Place.textContent = event.place;
   // Place.textContent = "contentTest"

    const spaceT = document.createElement('br');

    const timeDate = document.createElement('p2');
    timeDate.textContent = event.datePlace;
   // timeDate.textContent = "contentDate";

    cardView.appendChild(cardImage);
    cardContent.appendChild(title);
    cardContent.appendChild(requirements);
    cardContent.appendChild(Place);
    cardContent.appendChild(spaceT);
    cardContent.appendChild(timeDate);

    cardView.appendChild(cardContent);
    eventsList.appendChild(cardView);

    // const li = document.createElement('li');
    // li.textContent = '${event.name} (${event.date}) - ${event.location}';
    // eventsList.appendChild(li);
     });
}


function loadEvents() {
    //make a get request to the API endpoint using fetch
    fetch(ourEndpoint, { method: 'GET' }, {
        'Content-Type': 'application/json'
    },)
        .then(response => response.json())
        .then(data => {
            displayEvents(data);
        })
        .catch(error => {
            console.error('Erro fetching events:', error);
        })
}


// newJokeButton.addEventListener('click', displayEvents);

/*
function loadEvents() {
    //make a GET request to the API endpoint using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/events?ordering=-datePlace');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const events = JSON.parse(xhr.response);
            // update the events list with the new data
            displayEvents(events);
        } else {
            console.error('Request failed. Status code: ${xhr.status}');
        }
    };
    xhr.send();
}
*/


// load the events when the page loads
// window.addEventListener('load', loadEvents);

// reload the events every 10 seconds
// setInterval(loadEvents, 10000);
loadEvents();
