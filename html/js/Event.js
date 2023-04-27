const eventsList = document.getElementById('grid-container');

function displayEvents(events) {
    // clear existing events from the list 
    eventsList.innerHTML = '';

    // add each event to the list as a new <li> element
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = '${event.name} (${event.date}) - ${event.location}';
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