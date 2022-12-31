// I Have Added RapidApi fetch code here
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3f7fb41c9amsh15ce7cb2af9827bp1e5041jsn2ddf53c2094b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
// Over Here i Created a Function which Takes Paramter City
const getweather = (city) => {
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);              
});

jaipur.addEventListener("click", (e) => {
  e.preventDefault();
  getweather("Jaipur");
});

Bangalore.addEventListener("click", (e) => {
  e.preventDefault();
  getweather("Bangalore");
});

getweather("Delhi");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   const Latitude = position.coords.latitude;
//   const Longitude = position.coords.longitude;
// }

const mylocation = (Latitude, Longitude) => {
  cityname.innerHTML = "Your Location";
  console.log("Finally here i am");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=" +
      Latitude +
      "&lon=" +
      Longitude +
      "",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};

yourlocation.addEventListener("click", function getLocation() {
  console.log("i am here");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    prompt("Geolocation is not supported by this browser.");
  }
});

function showPosition(position) {
  console.log("now i am here");
  const Latitude = position.coords.latitude;
  const Longitude = position.coords.longitude;
  mylocation(Latitude, Longitude);
}
