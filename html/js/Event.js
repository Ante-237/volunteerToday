const eventsList = document.getElementById('grid-container');

function displayEvents(events) {
    // clear existing events from the list 
    eventsList.innerHTML = '';

    // add each event to the list as a new <li> element
    events.forEach(event => {
        // creating the cardview for addition of resources
        const cardView = document.createElement('div');
        cardView.classList.add('card');

        const cardImage = document.createElement('img');
        cardImage.src = "images/event1.jpg";

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h2');
        title.textContent = events.title;

        const requirements = document.createElement('p');
        requirements.textContent = events.requirement;

        const Place = document.createElement('p2');
        Place.textContent = events.place;

        const timeDate = document.createElement('p3');
        timeDate.textContent = events.datePlace;

        cardView.appendChild(cardImage);
        cardContent.appendChild(title);
        cardContent.appendChild(requirements);
        cardContent.appendChild(Place);
        cardContent.appendChild(timeDate);

        cardView.appendChild(cardContent);

        // const li = document.createElement('li');
        // li.textContent = '${event.name} (${event.date}) - ${event.location}';
        eventsList.appendChild(li);
    });
}

function loadEvents() {
    //make a GET request to the API endpoint using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/events?ordering=datePlace');
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

// load the events when the page loads
window.addEventListener('load', loadEvents);

// reload the events every 10 seconds
setInterval(loadEvents, 10000);