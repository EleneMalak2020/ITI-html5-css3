import User from "./User.js";

let form = document.getElementById("form");
let showUsersBtn = document.getElementById("show-users");

let firstName = document.getElementById("fist-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone");
let street = document.getElementById("street");
let city = document.getElementById("city");
let country = document.getElementById("country");
let zipCode = document.getElementById("zip-code");

form.addEventListener("submit", submit);
showUsersBtn.addEventListener("click", showUsersTable);

function showUsersTable() {
    let table = document.getElementById("users-data");

    let data = localStorage.getItem("users")
    if (data === null) {
        alert("There is no data to show please submit new data.");
        return;
    }

    data = JSON.parse(data);
    for (let user of data) {
        let row = document.createElement("tr");
        for (let element in user) {
            let cell = document.createElement("td");
            cell.textContent = user[element];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    table.style.display = "block";
}

// Reset the form fields
function reset() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phoneNumber.value = "";
    street.value = "";
    city.value = "";
    country.value = "";
    zipCode.value = "";
}

// Submit the user data
function submit(event) {
    event.preventDefault();

    let user = new User(firstName.value, lastName.value, email.value, phoneNumber.value,
        street.value, city.value, country.value, zipCode.value);

    saveData(user);

    reset();
}

// Save data to local storage
function saveData(user) {
    let oldData = localStorage.getItem("users");
    let newData = [];

    if (oldData !== null) {
        newData = JSON.parse(oldData);
        console.log("new data: ", newData);
    }

    newData.push(user.getUserObject());
    localStorage.setItem("users", JSON.stringify(newData));
}
