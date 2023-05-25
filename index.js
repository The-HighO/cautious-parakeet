// DECLARATIONS
let city = '';
let key = '';
let theState = document.querySelector(".state");
let theCountry = document.querySelector(".country");
let temparature = document.querySelector(".temparature");
let theWeather = document.querySelector(".weather");
let humidity = document.querySelector(".humValue");
let windSpeed = document.querySelector(".speedValue");
let userInput = document.querySelector("#dynamicInput");
let modal = document.getElementById("modal")
let error = document.querySelector(".error")
let theDate = new Date();
let dateDisplay = document.querySelector(".dates");

// CONVERTING MONTH TO TEXT
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthIndex = theDate.getMonth();
const month = months[monthIndex];

let test = () => {
    fetch(key)
        .then(response => {
            return response.json();
        })
        .then(data => {

            // DATA DISPLAY FOR DATE AND COUNTRY
            if (data.name === undefined) {
                modal.style.display = "flex"
                error.innerHTML = "<b>" + city.toUpperCase() + "</b>" + " does not exist, kindly enter a valid city name"

                setTimeout(() => {
                    modal.style.display = "none"
                    error.innerHTML = ""
                }, 3500);
            }
            else {
                theState.textContent = data.name + ",";
                theCountry.textContent = data.sys.country;
                dateDisplay.textContent = `${theDate.getDate()} ${month} ${theDate.getFullYear()}`;

                // THE WEATHER COMPONENT
                temparature.textContent = data.main.temp + "°";
                theWeather.textContent = data.weather[0].main;
                humidity.textContent = data.main.humidity + "%";
                windSpeed.textContent = data.wind.speed + "km/h";
            }

        });
}

//  USER INPUT DYNAMISM
userInput.addEventListener('change', () => {
    city = userInput.value;
    key = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97c95adba9ed058e377f5c39a68d2151&units=metric`;
    test();
});

test();

// MODAL CONTROLLER
window.onclick = (e) => {
    if (e.target.className === "modal") {
        modal.style.display = "none"
    }
}


