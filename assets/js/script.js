const API_KEY = "XAps_O7c3W7lYyRlWYuufCYCtyU";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

//add event listener so we can trigger the modal to load when the button is clicked
document.getElementById("status").addEventListener("click", e => getStatus(e));

//function needs to make a GET request to the API URL with the API Key & then pass the data to a function to display it

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }

}