document.addEventListener("DOMContentLoaded", function () {
  const beaches = [
    { name: "Marina Beach", latitude: 13.0475, longitude: 80.2824 },
    { name: "Juhu Beach", latitude: 19.0988, longitude: 72.8267 },
    { name: "Waikiki Beach", latitude: 21.2766, longitude: -157.8231 },
    { name: "Miami Beach", latitude: 25.7907, longitude: -80.13 },
    { name: "Santa Monica Beach", latitude: 34.0194, longitude: -118.4912 },
    { name: "Cannon Beach", latitude: 45.8916, longitude: -123.9613 },
    { name: "Tulum Beach", latitude: 20.2075, longitude: -87.4305 },
    { name: "Silent Beach", latitude: 47.8081, longitude: -122.3773 },
    {
      name: "Cape Cod National Seashore",
      latitude: 41.8372,
      longitude: -69.9728,
    },
    { name: "Prince Edward Island", latitude: 46.25, longitude: -63.0 },
    { name: "Playa del Carmen", latitude: 20.6274, longitude: -87.0799 },
    { name: "Copacabana Beach", latitude: -22.9707, longitude: -43.1824 },
    { name: "Ipanema Beach", latitude: -22.9836, longitude: -43.2044 },
    { name: "Bondi Beach", latitude: -33.8908, longitude: 151.2743 },
    { name: "Whitehaven Beach", latitude: -20.2827, longitude: 149.0349 },
    { name: "Cable Beach", latitude: -17.9614, longitude: 122.216 },
    { name: "Byron Beach", latitude: -28.642, longitude: 153.612 },
    { name: "Ullal Beach", latitude: 12.805, longitude: 74.8607 },
    { name: "Bhatkal Beach", latitude: 13.9853, longitude: 74.5553 },
    { name: "Shivrajpur Beach", latitude: 22.4167, longitude: 69.0667 },
    { name: "Ghogla Beach", latitude: 20.7167, longitude: 71.0167 },
    { name: "Padubidri Beach", latitude: 13.2167, longitude: 74.7833 },
    { name: "Kasarkod Beach", latitude: 14.6167, longitude: 74.3167 },
    { name: "Kappad Beach", latitude: 11.4167, longitude: 75.7167 },
    { name: "Kadmat Beach", latitude: 11.2167, longitude: 72.7833 },
    { name: "Eden Beach", latitude: 10.5667, longitude: 72.6333 },
    { name: "Minicoy Thundi Beach", latitude: 8.2833, longitude: 73.05 },
    { name: "Rushikonda Beach", latitude: 17.7826, longitude: 83.3763 },
    { name: "Pati Sonepur Beach", latitude: 20.8333, longitude: 86.9333 },
    { name: "Puri Beach", latitude: 19.7983, longitude: 85.8249 },
    { name: "Cox's Bazar Beach", latitude: 21.4272, longitude: 91.9702 },
    { name: "Inani Beach", latitude: 21.1833, longitude: 92.0333 },
    { name: "Kolatali Beach", latitude: 21.4272, longitude: 91.9702 },
    { name: "Himchari Beach", latitude: 21.4167, longitude: 91.9833 },
    { name: "Moorea Beach", latitude: -17.5388, longitude: -149.8295 },
    { name: "Saint Martin's Island", latitude: 20.6274, longitude: -87.0799 },
    { name: "Rarotonga", latitude: -21.2292, longitude: -159.7763 },
    { name: "Fiji Beach", latitude: -17.7134, longitude: 178.065 },
    { name: "Bora Beach", latitude: -16.5004, longitude: -151.7415 },
    { name: "Diami Beach", latitude: 25.7907, longitude: -80.1301 },
    { name: "Zanzibar", latitude: -6.1639, longitude: 39.1979 },
    { name: "Anse Source d'Argent", latitude: -4.3719, longitude: 55.8277 },
    { name: "Junput Beach", latitude: 21.6167, longitude: 87.6167 },
    { name: "Dalsari Beach", latitude: 21.6167, longitude: 69.6167 },
    { name: "Hendry Island Beach", latitude: 21.6167, longitude: 88.6167 },
    { name: "Chandrabagha Beach", latitude: 19.8833, longitude: 86.1167 },
    { name: "Bileswar Beach", latitude: 21.6167, longitude: 69.6167 },
    { name: "Ubharat Beach", latitude: 21.6167, longitude: 69.6167 },
    { name: "Porbandar Beach", latitude: 21.6167, longitude: 69.6167 },
    { name: "Kalpeni Beach", latitude: 10.6167, longitude: 72.6167 },
    { name: "Bangaram Beach", latitude: 10.6167, longitude: 72.6167 },
    { name: "Promenade Beach", latitude: 11.9333, longitude: 79.8333 },
    { name: "Auroville Beach", latitude: 11.9333, longitude: 79.8333 },
    { name: "Karaikal Beach", latitude: 10.9333, longitude: 79.8333 },
    { name: "Velankani Beach", latitude: 10.6833, longitude: 79.8333 },
    { name: "Serenity Beach", latitude: 11.9333, longitude: 79.8333 },
    { name: "Bheemunipatnam Beach", latitude: 17.8875, longitude: 83.4457 },
    { name: "Maninapudi Beach", latitude: 16.2447, longitude: 81.2375 },
    { name: "Uppada Beach", latitude: 17.0817, longitude: 82.3347 },
    { name: "Suryalanka Beach", latitude: 15.8345, longitude: 80.5051 },
    { name: "Kevla Beach", latitude: 20.6167, longitude: 72.6167 },
    { name: "Hedvi Beach", latitude: 17.0833, longitude: 73.5167 },
    { name: "Tithal Beach", latitude: 20.6167, longitude: 72.6167 },
    { name: "Bordi Beach", latitude: 20.1167, longitude: 72.7167 },
    { name: "Chakratirth Beach", latitude: 20.7167, longitude: 70.9833 },
    { name: "Mobor Beach", latitude: 15.1667, longitude: 73.9333 },
    { name: "Patnam Beach", latitude: 10.0167, longitude: 76.2167 },
    { name: "Vypin Beach", latitude: 10.0167, longitude: 76.2167 },
    { name: "Gahirmatha Beach", latitude: 20.7333, longitude: 86.9333 },
    { name: "Surathkal Beach", latitude: 13.0, longitude: 74.8 },
    { name: "Baindur Beach", latitude: 13.8667, longitude: 74.6167 },
    { name: "Mandarmani Beach", latitude: 21.6667, longitude: 87.7167 },
    { name: "Kavaratti Beach", latitude: 10.5669, longitude: 72.642 },
    { name: "Rameswaram Beach", latitude: 9.2885, longitude: 79.3127 },
    { name: "Mahabalipuram Beach", latitude: 12.6121, longitude: 80.1969 },
    { name: "Elliots Beach", latitude: 13.0, longitude: 80.2667 },
    { name: "Malpe Beach", latitude: 13.3496, longitude: 74.7039 },
    { name: "Gokarna Beach", latitude: 14.5566, longitude: 74.3168 },
    { name: "Kudle Beach", latitude: 14.5286, longitude: 74.3103 },
    { name: "Nivati Beach", latitude: 16.2144, longitude: 73.54 },
    { name: "Tarkarli Beach", latitude: 16.0402, longitude: 73.4653 },
    { name: "Velas Beach", latitude: 17.947, longitude: 73.0026 },
    { name: "Diu Beach", latitude: 20.7196, longitude: 70.9194 },
    { name: "Negombo Beach", latitude: 7.2101, longitude: 79.8388 },
    { name: "Mount Lavinia Beach", latitude: 6.8294, lng: 79.8652 },
    { name: "Narigama Beach", latitude: 6.1311, longitude: 80.1 },
    { name: "Goyambokka Beach", latitude: 6.0276, longitude: 80.7577 },
    { name: "Kahandamodara Beach", latitude: 6.0526, longitude: 80.8867 },
    { name: "Passikutha Beach", latitude: 7.9942, longitude: 81.5682 },
    { name: "Morgala Beach", latitude: 6.0538, longitude: 80.6863 },
    { name: "Vaduva Beach", latitude: 6.4185, longitude: 80.0056 },
    { name: "Silent Beach", latitude: 8.6767, longitude: 81.2125 },
    { name: "Kalametia Beach", latitude: 6.0259, longitude: 80.8512 },
    { name: "Arisimale Beach", latitude: 8.9597, longitude: 79.8336 },
    { name: "Medila Beach", latitude: 6.1207, longitude: 80.1044 },
    { name: "Thalaiyadi Beach", latitude: 9.6011, longitude: 80.1915 },
    { name: "Alapula Beach", latitude: 9.4942, longitude: 76.3274 },
    { name: "Maraari Beach", latitude: 9.6054, longitude: 76.2966 },
    { name: "Cola Beach", latitude: 15.0336, longitude: 73.9745 },
    { name: "Agonda Beach", latitude: 15.0176, longitude: 73.9872 },
    { name: "Butterfly Beach", latitude: 15.0043, longitude: 74.0214 },
    { name: "Nagoa Biu Beach", latitude: 20.7231, longitude: 70.9239 },
    { name: "Devuka Beach", latitude: 20.7119, longitude: 70.9216 },
    { name: "Yarada Beach", latitude: 17.6562, longitude: 83.282 },
    { name: "Paradise Beach", latitude: 11.9124, longitude: 79.8354 },
    { name: "Agatti Beach", latitude: 10.8533, longitude: 72.1943 },
  ];

  const searchBar = document.getElementById("search-bar");
  const searchButton = document.getElementById("search-button");
  const resetButton = document.getElementById("reset-button");
  const beachesContainer = document.getElementById("beaches-container");

  // Search button event listener
  searchButton.addEventListener("click", function () {
    const searchQuery = searchBar.value.toLowerCase();
    const beach = beaches.find((b) => b.name.toLowerCase() === searchQuery);

    if (beach) {
      const apiKey = "9526336ea23d4ad68e9103639240509"; // Replace with your actual API key
      const url = `http://api.worldweatheronline.com/premium/v1/marine.ashx?format=json&q=${beach.latitude},${beach.longitude}&key=${apiKey}`;

      // Show loading indicator
      beachesContainer.innerHTML = "<p>Loading...</p>";

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.data && data.data.weather) {
            const weatherData = data.data.weather;
            let forecastHTML = `<h2>7-Day Forecast for ${beach.name}</h2>`;

            // Loop through the weather array to display the next 7 days' forecast
            weatherData.forEach((day) => {
              forecastHTML += `
                <div class="weather-info">
                  <h3>Date: ${day.date}</h3>
                  <p>Max Temperature: ${day.maxtempC}°C</p>
                  <p>Min Temperature: ${day.mintempC}°C</p>
                  <p>Wave Height: ${day.hourly[0].swellHeight_m} m</p>
                  <p>Water Temperature: ${day.hourly[0].waterTemp_C}°C</p>
                  <p>Wind Speed: ${day.hourly[0].windspeedKmph} km/h</p>
                </div>
              `;
            });

            beachesContainer.innerHTML = forecastHTML;
          } else {
            beachesContainer.innerHTML =
              "<p>Weather data not available for this beach.</p>";
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          beachesContainer.innerHTML =
            "<p>Error fetching weather data. Please try again later.</p>";
        });
    } else {
      beachesContainer.innerHTML =
        "<p>Beach not found. Please try another name.</p>";
    }
  });

  // Reset button event listener
  resetButton.addEventListener("click", function () {
    searchBar.value = ""; // Clear the search bar
    beachesContainer.innerHTML = ""; // Clear the weather data
  });
});
