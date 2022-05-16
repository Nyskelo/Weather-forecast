function fullDateTime() {
  let date = new Date();
  let time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  // document.getElementById("getTime").innerHTML = time;
  let timeTime = document.querySelector("#getTime");
  timeTime.innerHTML = time;
}

fullDateTime();

function fullDateDayLong() {
  let date = new Date();
  let currentDay = new Intl.DateTimeFormat("en-US", {
    // year: "numeric",
    month: "long",
    weekday: "long",
    day: "2-digit",
  });
  document.getElementById("getDay").innerHTML = `${currentDay.format(date)}, `;
}
fullDateDayLong();
