let input = document.querySelector("input");
let citydiv = document.querySelector(".city");
let datediv = document.querySelector(".date");
let tempdiv = document.querySelector(".temp");
let weatherdiv = document.querySelector(".weather");
let hilowdiv = document.querySelector(".hi-low");

function inputhandler() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=8919a14256795f4ab40add91c0245b7b`,
    {}
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "city not found") {
        alert("کشور وارد شده صحیح نمی باشد.");
      } else {
        console.log(data);
        showdata(data);
      }
    });
}

function showdata(data) {
  citydiv.innerHTML = `${data.name},${data.sys.country}`;
  tempdiv.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;
  weatherdiv.innerHTML = `${data.weather[0].main}`;
  hilowdiv.innerHTML = `${Math.floor(
    data.main.temp_max - 273.15
  )}°c / ${Math.floor(data.main.temp_min - 273.15)}°c`;
  datediv.innerHTML = showdate();
}

function showdate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let newdate = new Date();

  let daysdate = days[newdate.getDay()];
  let monthdate = months[newdate.getMonth()];
  let yeardate = newdate.getFullYear();

  return `${daysdate} ${newdate.getDay()} ${monthdate} ${yeardate}`;
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    inputhandler();
  }
});
