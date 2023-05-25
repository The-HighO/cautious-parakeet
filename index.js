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
      console.log(data);
      
      // DATA DISPLAY FOR DATE AND COUNTRY
      theState.textContent = data.name + ",";
      theCountry.textContent = data.sys.country;
      dateDisplay.textContent = `${theDate.getDate()} ${month} ${theDate.getFullYear()}`;
      
      // THE WEATHER COMPONENT
      temparature.textContent = data.main.temp + "°";
      theWeather.textContent = data.weather[0].main;
      humidity.textContent = data.main.humidity + "%";
      windSpeed.textContent = data.wind.speed + "km/h";
    });
}

//  USER INPUT DYNAMISM
userInput.addEventListener('change', () => {
  city = userInput.value;
  key = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97c95adba9ed058e377f5c39a68d2151&units=metric`;
  test();
});

test();
