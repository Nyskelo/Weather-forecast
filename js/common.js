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
let unitsFahrenheit = "imperial";
let unitsCelcius = "metric";

function displayForecastDaily(response) {
  let forecast = response.data.daily;
  console.log(response.data.daily[0].dt * 1000);

  let dateSun = new Date(response.data.daily[0].dt * 1000);
  let sunImgDay = document.querySelector("#imgsun");
  let sunTempMax = document.querySelector("#sun-temp-max");
  let sunTempMin = document.querySelector("#sun-temp-min");
  let sunDate = document.querySelector("#daySun");
  sunImgDay.setAttribute("src", `fotobank/${forecast[0].weather[0].icon}.svg`);
  sunTempMax.innerHTML = Math.round(forecast[0].temp.max);
  sunTempMin.innerHTML = ` ${Math.round(forecast[0].temp.min)}`;
  sunDate.innerHTML = `Sun, ${dateSun.getDate()}`;

  let dateMon = new Date(response.data.daily[1].dt * 1000);
  let monImgDay = document.querySelector("#imgmon");
  let monTempMax = document.querySelector("#mon-temp-max");
  let monTempMin = document.querySelector("#mon-temp-min");
  let monDate = document.querySelector("#dayMon");
  monImgDay.setAttribute("src", `fotobank/${forecast[1].weather[0].icon}.svg`);
  monTempMax.innerHTML = Math.round(forecast[1].temp.max);
  monTempMin.innerHTML = ` ${Math.round(forecast[1].temp.min)}`;
  monDate.innerHTML = `Mon, ${dateMon.getDate()}`;

  let dateTue = new Date(response.data.daily[2].dt * 1000);
  let tueImgDay = document.querySelector("#imgtue");
  let tueTempMax = document.querySelector("#tue-temp-max");
  let tueTempMin = document.querySelector("#tue-temp-min");
  let tueDate = document.querySelector("#dayTue");
  tueImgDay.setAttribute("src", `fotobank/${forecast[2].weather[0].icon}.svg`);
  tueTempMax.innerHTML = Math.round(forecast[2].temp.max);
  tueTempMin.innerHTML = ` ${Math.round(forecast[2].temp.min)}`;
  tueDate.innerHTML = `Tue, ${dateTue.getDate()}`;

  let dateWed = new Date(response.data.daily[3].dt * 1000);
  let wedImgDay = document.querySelector("#imgwed");
  let wedTempMax = document.querySelector("#wed-temp-max");
  let wedTempMin = document.querySelector("#wed-temp-min");
  let wedDate = document.querySelector("#dayWed");
  wedImgDay.setAttribute("src", `fotobank/${forecast[3].weather[0].icon}.svg`);
  wedTempMax.innerHTML = Math.round(forecast[3].temp.max);
  wedTempMin.innerHTML = ` ${Math.round(forecast[3].temp.min)}`;
  wedDate.innerHTML = `Wed, ${dateWed.getDate()}`;

  let dateThu = new Date(response.data.daily[4].dt * 1000);
  let thuImgDay = document.querySelector("#imgthu");
  let thuTempMax = document.querySelector("#thu-temp-max");
  let thuTempMin = document.querySelector("#thu-temp-min");
  let thuDate = document.querySelector("#dayThu");
  thuImgDay.setAttribute("src", `fotobank/${forecast[4].weather[0].icon}.svg`);
  thuTempMax.innerHTML = Math.round(forecast[4].temp.max);
  thuTempMin.innerHTML = ` ${Math.round(forecast[4].temp.min)}`;
  thuDate.innerHTML = `Thu, ${dateThu.getDate()}`;

  let dateFri = new Date(response.data.daily[5].dt * 1000);
  let friImgDay = document.querySelector("#imgfri");
  let friTempMax = document.querySelector("#fri-temp-max");
  let friTempMin = document.querySelector("#fri-temp-min");
  let friDate = document.querySelector("#dayFri");
  friImgDay.setAttribute("src", `fotobank/${forecast[5].weather[0].icon}.svg`);
  friTempMax.innerHTML = Math.round(forecast[5].temp.max);
  friTempMin.innerHTML = ` ${Math.round(forecast[5].temp.min)}`;
  friDate.innerHTML = `Fri, ${dateFri.getDate()}`;

  let dateSat = new Date(response.data.daily[6].dt * 1000);
  let satImgDay = document.querySelector("#imgsat");
  let satTempMax = document.querySelector("#sat-temp-max");
  let satTempMin = document.querySelector("#sat-temp-min");
  let satDate = document.querySelector("#daySat");
  satImgDay.setAttribute("src", `fotobank/${forecast[6].weather[0].icon}.svg`);
  satTempMax.innerHTML = Math.round(forecast[6].temp.max);
  satTempMin.innerHTML = ` ${Math.round(forecast[6].temp.min)}`;
  satDate.innerHTML = `Sat, ${dateSat.getDate()}`;
}

function getForecastCoordDaily(coordinates) {
  let apiKey = `910507594fe3cf58151f5b16db41c101`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecastDaily);
  console.log(apiUrl);
}

function showCityWeather(response) {
  console.log(response.data);
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
  getForecastCoordDaily(response.data.coord);
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
