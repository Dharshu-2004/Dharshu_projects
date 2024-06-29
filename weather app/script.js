//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial
let API_KEY = "d6c7dc78cd9ecaf031713e9436a3bfac";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const Full_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(Full_url);
  console.log(city);
  return weatherPromise.then((response) => {
    return response.json();
  });
};
function searchCity() {
  const city = document.getElementById("city-input").value;

  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

showWeatherData = (weatherData) => {
  const cityNameElement = document.getElementById("city-name");
  const weatherTypeElement = document.getElementById("weather-type");
  const tempElement = document.getElementById("temp");
  const minTempElement = document.getElementById("min-temp");

  cityNameElement.innerText = weatherData.name;
  weatherTypeElement.innerText = weatherData.weather[0].main;
  tempElement.innerText = weatherData.main.temp;
  minTempElement.innerText = weatherData.main.temp_min;

  const weatherCondition = weatherData.weather[0].main.toLowerCase();
  const containerElement = document.querySelector(".container");

  // Define the background image URLs corresponding to different weather conditions
  const backgroundImageUrls = {
    clear:
      'url("https://th.bing.com/th/id/OIP.e-uO1DOXEZVncqtkBLuJBwHaFj?rs=1&pid=ImgDetMain")',
    clouds:
      'url("https://th.bing.com/th/id/OIP.mt5pWrK8kCS_7i0jAx-o3gHaE8?rs=1&pid=ImgDetMain")',
    haze: 'url("https://th.bing.com/th/id/R.62379465f3ad0f5ef1d0fa9673da4bd6?rik=MsNDrWb1I5scGw&riu=http%3a%2f%2fcontent.khou.com%2fphoto%2f2015%2f09%2f14%2f635778307132434885-Smoky-haze_8593425_ver1.0.JPG&ehk=U8601By3Y3rYLzyc5TUI5lhd%2fsHVl7Pj%2fQxF4QWjGnA%3d&risl=&pid=ImgRaw&r=0")',
    rain: 'url("https://th.bing.com/th/id/OIP.XjEzudVYra5Sb46nWSJakwHaFj?rs=1&pid=ImgDetMain")',
    // Add more mappings for other weather conditions as needed
  };

  // Check if the current weather condition has an associated background image URL
  if (backgroundImageUrls.hasOwnProperty(weatherCondition)) {
    const backgroundImageUrl = backgroundImageUrls[weatherCondition];
    containerElement.style.backgroundImage = backgroundImageUrl;
  } else {
    // If no image is available for the weather condition, set a default background color
    containerElement.style.backgroundColor = "white"; // or any other color you prefer
  }
};
