let getLocationBtn = document.getElementById("getLocationBtn");
let coordinates = {};
let options = {
    enableHighAccuracy: true,
    timeout: 50000,
    maximumAge: 100000
};

// Show error message in alert window
function handleError(error) {
    let message = "";

    switch (error.code) {
        case 0:
            message = "Unknown error please try again later"
            break;

        case 1:
            message = "User permission denied please allow access to your location"
            break;

        case 2:
            message = "Position unavailable"
            break;

        case 3:
            message = "Request timeout error check your internet connection"
            break;
    }

    alert(message);
}

// Get the coordinates of the user
function getCoords(pos) {
    coordinates = {lat: pos.coords.latitude, lng: pos.coords.longitude};
}

// Display the map and user location on it
function getMap() {
    navigator.geolocation.getCurrentPosition(getCoords, handleError, options);
    initMap();
}

// show map when user click on the button
getLocationBtn.addEventListener("click", getMap);

// Get the map from google maps
function initMap() {
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: coordinates});

    let marker = new google.maps.Marker({position: coordinates, map: map});
}