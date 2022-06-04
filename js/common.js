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
let units = "metric"; //"imperial";
let day1TempMax = document.querySelector("#day1-temp-max");
let day1TempMin = document.querySelector("#day1-temp-min");
let day2TempMax = document.querySelector("#day2-temp-max");
let day2TempMin = document.querySelector("#day2-temp-min");
let day3TempMax = document.querySelector("#day3-temp-max");
let day3TempMin = document.querySelector("#day3-temp-min");
let day4TempMax = document.querySelector("#day4-temp-max");
let day4TempMin = document.querySelector("#day4-temp-min");
let day5TempMax = document.querySelector("#day5-temp-max");
let day5TempMin = document.querySelector("#day5-temp-min");
let day6TempMax = document.querySelector("#day6-temp-max");
let day6TempMin = document.querySelector("#day6-temp-min");
let day7TempMax = document.querySelector("#day7-temp-max");
let day7TempMin = document.querySelector("#day7-temp-min");
let tempMetric = null;
let tempFeel = null;
let day1TemperatureMax = null;
let day1TemperatureMin = null;
let day2TemperatureMax = null;
let day2TemperatureMin = null;
let day3TemperatureMax = null;
let day3TemperatureMin = null;
let day4TemperatureMax = null;
let day4TemperatureMin = null;
let day5TemperatureMax = null;
let day5TemperatureMin = null;
let day6TemperatureMax = null;
let day6TemperatureMin = null;
let day7TemperatureMax = null;
let day7TemperatureMin = null;
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function displayForecastDaily(response) {
  let forecast = response.data.daily;
  let dateDay1 = new Date(response.data.daily[0].dt * 1000);
  let dayDay1 = dateDay1.getDay();
  let day1ImgDay = document.querySelector("#imgDay1");
  let day1Date = document.querySelector("#dayDay1");
  day1ImgDay.setAttribute("src", `fotobank/${forecast[0].weather[0].icon}.svg`);
  day1TempMax.innerHTML = Math.round(forecast[0].temp.max);
  day1TempMin.innerHTML = ` / ${Math.round(forecast[0].temp.min)}`;
  day1Date.innerHTML = `${days[dayDay1]}, ${dateDay1.getDate()}`;
  day1TemperatureMax = Math.round(forecast[0].temp.max);
  day1TemperatureMin = Math.round(forecast[0].temp.min);

  let dateDay2 = new Date(response.data.daily[1].dt * 1000);
  let dayDay2 = dateDay2.getDay();
  let day2ImgDay = document.querySelector("#imgDay2");
  let day2Date = document.querySelector("#dayDay2");
  day2ImgDay.setAttribute("src", `fotobank/${forecast[1].weather[0].icon}.svg`);
  day2TempMax.innerHTML = Math.round(forecast[1].temp.max);
  day2TempMin.innerHTML = ` / ${Math.round(forecast[1].temp.min)}`;
  day2Date.innerHTML = `${days[dayDay2]}, ${dateDay2.getDate()}`;
  day2TemperatureMax = Math.round(forecast[1].temp.max);
  day2TemperatureMin = Math.round(forecast[1].temp.min);

  let dateDay3 = new Date(response.data.daily[2].dt * 1000);
  let dayDay3 = dateDay3.getDay();
  let day3ImgDay = document.querySelector("#imgDay3");
  let day3Date = document.querySelector("#dayDay3");
  day3ImgDay.setAttribute("src", `fotobank/${forecast[2].weather[0].icon}.svg`);
  day3TempMax.innerHTML = Math.round(forecast[2].temp.max);
  day3TempMin.innerHTML = ` / ${Math.round(forecast[2].temp.min)}`;
  day3Date.innerHTML = `${days[dayDay3]}, ${dateDay3.getDate()}`;
  day3TemperatureMax = Math.round(forecast[2].temp.max);
  day3TemperatureMin = Math.round(forecast[2].temp.min);

  let dateDay4 = new Date(response.data.daily[3].dt * 1000);
  let dayDay4 = dateDay4.getDay();
  let day4ImgDay = document.querySelector("#imgDay4");
  let day4Date = document.querySelector("#dayDay4");
  day4ImgDay.setAttribute("src", `fotobank/${forecast[3].weather[0].icon}.svg`);
  day4TempMax.innerHTML = Math.round(forecast[3].temp.max);
  day4TempMin.innerHTML = ` / ${Math.round(forecast[3].temp.min)}`;
  day4Date.innerHTML = `${days[dayDay4]}, ${dateDay4.getDate()}`;
  day4TemperatureMax = Math.round(forecast[3].temp.max);
  day4TemperatureMin = Math.round(forecast[3].temp.min);

  let dateDay5 = new Date(response.data.daily[4].dt * 1000);
  let dayDay5 = dateDay5.getDay();
  let day5ImgDay = document.querySelector("#imgDay5");
  let day5Date = document.querySelector("#dayDay5");
  day5ImgDay.setAttribute("src", `fotobank/${forecast[4].weather[0].icon}.svg`);
  day5TempMax.innerHTML = Math.round(forecast[4].temp.max);
  day5TempMin.innerHTML = ` / ${Math.round(forecast[4].temp.min)}`;
  day5Date.innerHTML = `${days[dayDay5]}, ${dateDay5.getDate()}`;
  day5TemperatureMax = Math.round(forecast[4].temp.max);
  day5TemperatureMin = Math.round(forecast[4].temp.min);

  let dateDay6 = new Date(response.data.daily[5].dt * 1000);
  let dayDay6 = dateDay6.getDay();
  let day6ImgDay = document.querySelector("#imgDay6");
  let day6Date = document.querySelector("#dayDay6");
  day6ImgDay.setAttribute("src", `fotobank/${forecast[5].weather[0].icon}.svg`);
  day6TempMax.innerHTML = Math.round(forecast[5].temp.max);
  day6TempMin.innerHTML = ` / ${Math.round(forecast[5].temp.min)}`;
  day6Date.innerHTML = `${days[dayDay6]}, ${dateDay6.getDate()}`;
  day6TemperatureMax = Math.round(forecast[5].temp.max);
  day6TemperatureMin = Math.round(forecast[5].temp.min);

  let dateDay7 = new Date(response.data.daily[6].dt * 1000);
  let dayDay7 = dateDay7.getDay();
  let day7ImgDay = document.querySelector("#imgDay7");
  let day7Date = document.querySelector("#dayDay7");
  day7ImgDay.setAttribute("src", `fotobank/${forecast[6].weather[0].icon}.svg`);
  day7TempMax.innerHTML = Math.round(forecast[6].temp.max);
  day7TempMin.innerHTML = ` / ${Math.round(forecast[6].temp.min)}`;
  day7Date.innerHTML = `${days[dayDay7]}, ${dateDay7.getDate()}`;
  day7TemperatureMax = Math.round(forecast[6].temp.max);
  day7TemperatureMin = Math.round(forecast[6].temp.min);
}

function getForecastCoordDaily(coordinates) {
  let apiKey = `910507594fe3cf58151f5b16db41c101`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecastDaily);
}

function showCityWeather(response) {
  cityName.innerHTML = response.data.name;
  tempMetric = Math.round(response.data.main.temp);
  tempCity.innerHTML = tempMetric;
  tempFeel = Math.round(response.data.main.feels_like);
  feelTemp.innerHTML = tempFeel;
  feelDegree.innerHTML = ` °C`;
  tempTodayC.innerHTML = `<snap>°C</snap>`;
  feelTemp.innerHTML = tempFeel;
  for (let i of feelDegree) {
    i.innerHTML = ` °C`;
  }
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
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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

  day1TempMax.innerHTML = Math.round(day1TemperatureMax);
  day1TempMin.innerHTML = ` / ${Math.round(day1TemperatureMin)}`;
  day2TempMax.innerHTML = Math.round(day2TemperatureMax);
  day2TempMin.innerHTML = ` / ${Math.round(day2TemperatureMin)}`;
  day3TempMax.innerHTML = Math.round(day3TemperatureMax);
  day3TempMin.innerHTML = ` / ${Math.round(day3TemperatureMin)}`;
  day4TempMax.innerHTML = Math.round(day4TemperatureMax);
  day4TempMin.innerHTML = ` / ${Math.round(day4TemperatureMin)}`;
  day5TempMax.innerHTML = Math.round(day5TemperatureMax);
  day5TempMin.innerHTML = ` / ${Math.round(day5TemperatureMin)}`;
  day6TempMax.innerHTML = Math.round(day6TemperatureMax);
  day6TempMin.innerHTML = ` / ${Math.round(day6TemperatureMin)}`;
  day7TempMax.innerHTML = Math.round(day7TemperatureMax);
  day7TempMin.innerHTML = ` / ${Math.round(day7TemperatureMin)}`;
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

  day1TempMax.innerHTML = Math.round((day1TemperatureMax * 9) / 5 + 32);
  day1TempMin.innerHTML = ` / ${Math.round((day1TemperatureMin * 9) / 5 + 32)}`;
  day2TempMax.innerHTML = Math.round((day2TemperatureMax * 9) / 5 + 32);
  day2TempMin.innerHTML = ` / ${Math.round((day2TemperatureMin * 9) / 5 + 32)}`;
  day3TempMax.innerHTML = Math.round((day3TemperatureMax * 9) / 5 + 32);
  day3TempMin.innerHTML = ` / ${Math.round((day3TemperatureMin * 9) / 5 + 32)}`;
  day4TempMax.innerHTML = Math.round((day4TemperatureMax * 9) / 5 + 32);
  day4TempMin.innerHTML = ` / ${Math.round((day4TemperatureMin * 9) / 5 + 32)}`;
  day5TempMax.innerHTML = Math.round((day5TemperatureMax * 9) / 5 + 32);
  day5TempMin.innerHTML = ` / ${Math.round((day5TemperatureMin * 9) / 5 + 32)}`;
  day6TempMax.innerHTML = Math.round((day6TemperatureMax * 9) / 5 + 32);
  day6TempMin.innerHTML = ` / ${Math.round((day6TemperatureMin * 9) / 5 + 32)}`;
  day7TempMax.innerHTML = Math.round((day7TemperatureMax * 9) / 5 + 32);
  day7TempMin.innerHTML = ` / ${Math.round((day7TemperatureMin * 9) / 5 + 32)}`;
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(showCityLocation);
}

function showCityLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `910507594fe3cf58151f5b16db41c101`;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(cityUrl).then(showCityWeather);
}

tempTodayC.addEventListener("click", lookTempC);
tempTodayF.addEventListener("click", lookTempF);
formInput.addEventListener("submit", getCity);
location1.addEventListener("click", getLocation);
searchCity("Kyiv");
