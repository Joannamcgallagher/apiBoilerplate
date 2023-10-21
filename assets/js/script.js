const API_KEY = "XAps_O7c3W7lYyRlWYuufCYCtyU";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

//add event listener so we can trigger the modal to load when the button is clicked
document.getElementById("status").addEventListener("click", e => getStatus(e));
//add event listener for submit button on form
document.getElementById("submit").addEventListener("click", e => postForm(e));


async function postForm(e) {

    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": API_KEY,
        },
        body: form,
    });

}
//function needs to make a GET request to the API URL with the API Key & then pass the data to a function to display it

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    }
    else {
        throw new Error(data.error);
    }

}

async function postForm(e) {

    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": API_KEY,
        },
        body: form,
    });

}

function displayStatus(data)
{

    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();
}