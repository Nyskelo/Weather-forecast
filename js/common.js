let tempMetric = 0;
let tempFeel = 0;
let formInput = document.querySelector("#form-search");
let inputTextCity = document.querySelector("#input-text");
let cityName = document.querySelector("#name-city");
let tempCity = document.querySelector("#temp-current");
let feelTemp = document.querySelector("#feels_like");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let wind = document.querySelector("#wind");
let weatherDescription = document.querySelector("#weather-description");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let feelDegree = document.querySelectorAll(".thinCap-js");
let tempTodayC = document.querySelector("#tempC-today");
let tempTodayF = document.querySelector("#tempF-today");
tempTodayF.innerHTML = `<snap class="temp-C-F-hover-js">°F</snap>`;
let location1 = document.querySelector("#current-location");
let imgHead = document.querySelector("#imgHead");

function showCityWeather(response) {
  // console.log(response.data);
  cityName.innerHTML = response.data.name;
  tempMetric = Math.round(response.data.main.temp);
  tempCity.innerHTML = tempMetric;
  tempFeel = Math.round(response.data.main.feels_like);
  feelTemp.innerHTML = tempFeel;
  feelDegree.innerHTML = ` °C`;
  humidity.innerHTML = response.data.main.humidity;
  pressure.innerHTML = Math.round(response.data.main.pressure);
  wind.innerHTML = Math.round((response.data.wind.speed * 60 * 60) / 1000);
  weatherDescription.innerHTML = response.data.weather[0].description;
  let sunRise = new Date(response.data.sys.sunrise * 1000);
  let timeSunRise = sunRise.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  let sunSet = new Date(response.data.sys.sunset * 1000);
  let timeSunSet = sunSet.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  sunrise.innerHTML = timeSunRise;
  sunset.innerHTML = timeSunSet;
  inputTextCity.value = "";
  imgHead.setAttribute("src", `fotobank/${response.data.weather[0].icon}.svg`);
  imgHead.setAttribute("alt", `${response.data.weather[0].description}`);
}

function searchCity(city) {
  let apiKey = `910507594fe3cf58151f5b16db41c101`;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios
    .get(cityUrl)
    .then(showCityWeather)
    .catch((error) => {
      cityName.innerHTML = `Oops, try again 😉`;
    });
}

function getCity(event) {
  event.preventDefault();
  let city = inputTextCity.value;
  searchCity(city);
}

function lookTempC() {
  let tempCurrent = document.querySelector("#temp-current");
  let tempTodayF = document.querySelector("#tempF-today");
  let tempTodayC = document.querySelector("#tempC-today");
  feelTemp.innerHTML = tempFeel;
  for (let i of feelDegree) {
    i.innerHTML = ` °C`;
  }
  tempCurrent.innerHTML = tempMetric;
  tempTodayC.classList.remove("active-href");
  tempTodayF.classList.add("active-href");
  tempTodayC.innerHTML = `<snap>°C</snap>`;
}

function lookTempF() {
  let tempFeelF = Math.round((tempFeel * 9) / 5 + 32);
  let tempF = Math.round((tempMetric * 9) / 5 + 32);
  let tempCurrent = document.querySelector("#temp-current");
  let tempTodayF = document.querySelector("#tempF-today");
  let tempTodayC = document.querySelector("#tempC-today");
  feelTemp.innerHTML = tempFeelF;
  for (let i of feelDegree) {
    i.innerHTML = ` °F`;
  }
  tempCurrent.innerHTML = `${tempF}`;
  tempTodayF.innerHTML = `°F`;
  tempTodayC.classList.add("active-href");
  tempTodayF.classList.remove("active-href");
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(showCityLocation);
}

function showCityLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `910507594fe3cf58151f5b16db41c101`;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showCityWeather);
}

function getActiveDay() {
  let date = new Date();
  let currentDay = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  });
  let id = `${currentDay.format(date)}`;
  id = id.toLocaleLowerCase();
  document.getElementById(id).classList.add("active-day-js");
}

tempTodayC.addEventListener("click", lookTempC);
tempTodayF.addEventListener("click", lookTempF);
formInput.addEventListener("submit", getCity);
location1.addEventListener("click", getLocation);
getActiveDay();
searchCity("Kyiv");
