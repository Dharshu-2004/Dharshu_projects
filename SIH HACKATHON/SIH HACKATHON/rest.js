const mapDiv = document.getElementById("map");
const beachSelectContainer = document.getElementById("beachSelectContainer");
const beachSelect = document.getElementById("beachSelect");
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.querySelector("#sidebar .closebtn");
let map;
let selectedBeachLat;
let selectedBeachLng;

const beaches = [
  { name: "Marina Beach", lat: 13.0448, lng: 80.2785 },
  { name: "Juhu Beach", lat: 19.0997, lng: 72.8335 },
  { name: "Waikiki Beach", lat: 21.2766, lng: -157.8206 },
  { name: "Miami Beach", lat: 25.7907, lng: -80.13 },
  { name: "Santa Monica Beach", lat: 34.0194, lng: -118.4912 },
  { name: "Cannon Beach", lat: 45.8916, lng: -123.9613 },
  { name: "Cape Cod National Seashore", lat: 41.8772, lng: -69.9616 },
  { name: "Prince Edward Island", lat: 46.5107, lng: -63.4168 },
  { name: "Playa del Carmen", lat: 20.6296, lng: -87.0739 },
  { name: "Tulum Beach", lat: 20.2117, lng: -87.4659 },
  { name: "Copacabana Beach", lat: -22.9711, lng: -43.1822 },
  { name: "Ipanema Beach", lat: -22.9838, lng: -43.2096 },
  { name: "Playa Blanca", lat: 38.973, lng: -0.7796 },
  { name: "Playa Mancora", lat: -4.1686, lng: -81.0764 },
  { name: "Playa del Amor", lat: 20.6162, lng: -105.447 },
  { name: "Bondi Beach", lat: -33.8915, lng: 151.2767 },
  { name: "Whitehaven Beach", lat: -20.2833, lng: 149.0833 },
  { name: "Cable Beach", lat: -17.964, lng: 122.206 },
  { name: "Byron Beach", lat: -28.642, lng: 153.6121 },
  { name: "Seven Mile Beach", lat: 18.3048, lng: -78.3393 },
  { name: "Gray's Spay Beach", lat: 19.4344, lng: -74.5452 },
  { name: "Eagle Beach", lat: 12.5479, lng: -70.0631 },
  { name: "Playa Paraiso", lat: 20.2166, lng: -87.4316 },
  { name: "Boracay Island", lat: 11.9674, lng: 121.9248 },
  { name: "Bali", lat: -8.3405, lng: 115.092 },
  { name: "Phuket", lat: 7.8804, lng: 98.3923 },
  { name: "Koh Phi Phi", lat: 7.7368, lng: 98.7784 },
  { name: "Maldives", lat: 3.2028, lng: 73.2207 },
  { name: "Andaman and Nicobar Islands", lat: 11.7401, lng: 92.6586 },
  { name: "Camps Bay Beach", lat: -33.951, lng: 18.3774 },
  { name: "Anse Source d'Argent", lat: -4.3645, lng: 55.8261 },
  { name: "Zanzibar", lat: -6.1659, lng: 39.2026 },
  { name: "Diani Beach", lat: -4.3186, lng: 39.5824 },
  { name: "Bora Bora", lat: -16.5004, lng: -151.7415 },
  { name: "Fiji Island", lat: -17.7134, lng: 178.065 },
  { name: "Rarotonga", lat: -21.2292, lng: -159.7762 },
  { name: "Saint Martin's Island", lat: 20.6082, lng: 92.3222 },
  { name: "Moorea", lat: -17.5388, lng: -149.8295 },
  { name: "Himchari Beach", lat: 21.3527, lng: 92.0516 },
  { name: "Kolatali Beach", lat: 21.4363, lng: 91.9826 },
  { name: "Inani Beach", lat: 21.2547, lng: 92.0344 },
  { name: "Cox's Bazar", lat: 21.4272, lng: 91.9856 },
  { name: "Puri Beach", lat: 19.7983, lng: 85.8249 },
  { name: "Pati Sonepur Sea Beach", lat: 20.1736, lng: 86.4368 },
  { name: "Rushikonda Beach", lat: 17.7917, lng: 83.3841 },
  { name: "Kovalam Beach", lat: 8.4006, lng: 76.9786 },
  { name: "Minicoy Thundi Beach", lat: 8.2834, lng: 73.0459 },
  { name: "Eden Beach", lat: -33.9014, lng: 18.4128 },
  { name: "Kadmat Beach", lat: 11.2312, lng: 72.7788 },
  { name: "Kappad Beach", lat: 11.3951, lng: 75.722 },
  { name: "Kasarkod Beach", lat: 14.383, lng: 74.4619 },
  { name: "Padubidri Beach", lat: 13.1331, lng: 74.785 },
  { name: "Ghoghla Beach", lat: 20.7183, lng: 70.922 },
  { name: "Shivrajpur Beach", lat: 22.3869, lng: 69.069 },
  { name: "Dalasri Beach", lat: 15.2981, lng: 73.9906 },
  { name: "Bilesaar Beach", lat: 15.2993, lng: 74.124 },
  { name: "Chandrabagha Beach", lat: 19.8801, lng: 86.0851 },
  { name: "Junput Beach", lat: 21.7471, lng: 87.8786 },
  { name: "Hendry Island Beach", lat: 13.3177, lng: 92.7166 },
  { name: "Shankar Pur Beach", lat: 21.6274, lng: 87.5637 },
  { name: "Frasergunj Beach", lat: 21.5769, lng: 88.2575 },
  { name: "Bhatkal Beach", lat: 13.9872, lng: 74.5595 },
  { name: "Sasihithlu Beach", lat: 13.0975, lng: 74.7897 },
  { name: "Ulal Beach", lat: 12.8178, lng: 74.8605 },
  { name: "Alapula Beach", lat: 9.4942, lng: 76.3274 },
  { name: "Maraari Beach", lat: 9.6054, lng: 76.2966 },
  { name: "Cola Beach", lat: 15.0336, lng: 73.9745 },
  { name: "Agonda Beach", lat: 15.0176, lng: 73.9872 },
  { name: "Butterfly Beach", lat: 15.0043, lng: 74.0214 },
  { name: "Nagoa Biu Beach", lat: 20.7231, lng: 70.9239 },
  { name: "Devuka Beach", lat: 20.7119, lng: 70.9216 },
  { name: "Yarada Beach", lat: 17.6562, lng: 83.282 },
  { name: "Paradise Beach", lat: 11.9124, lng: 79.8354 },
  { name: "Agatti Beach", lat: 10.8533, lng: 72.1943 },
  { name: "Kavaratti Beach", lat: 10.5666, lng: 72.6358 },
  { name: "Rameswaram Beach", lat: 9.2805, lng: 79.3129 },
  { name: "Mahabalipuram Beach", lat: 12.6172, lng: 80.1927 },
  { name: "Elliots Beach", lat: 13.0006, lng: 80.273 },
  { name: "Malpe Beach", lat: 13.3596, lng: 74.7041 },
  { name: "Gokarna Beach", lat: 14.5566, lng: 74.3168 },
  { name: "Kudle Beach", lat: 14.5286, lng: 74.3103 },
  { name: "Nivati Beach", lat: 16.2144, lng: 73.54 },
  { name: "Tarkarli Beach", lat: 16.0402, lng: 73.4653 },
  { name: "Velas Beach", lat: 17.947, lng: 73.0026 },
  { name: "Diu Beach", lat: 20.7196, lng: 70.9194 },
  { name: "Negombo Beach", lat: 7.2101, lng: 79.8388 },
  { name: "Mount Lavinia Beach", lat: 6.8294, lng: 79.8652 },
  { name: "Narigama Beach", lat: 6.1311, lng: 80.1 },
  { name: "Goyambokka Beach", lat: 6.0276, lng: 80.7577 },
  { name: "Kahandamodara Beach", lat: 6.0526, lng: 80.8867 },
  { name: "Passikutha Beach", lat: 7.9942, lng: 81.5682 },
  { name: "Morgala Beach", lat: 6.0538, lng: 80.6863 },
  { name: "Vaduva Beach", lat: 6.4185, lng: 80.0056 },
  { name: "Silent Beach", lat: 8.6767, lng: 81.2125 },
  { name: "Kalametia Beach", lat: 6.0259, lng: 80.8512 },
  { name: "Arisimale Beach", lat: 8.9597, lng: 79.8336 },
  { name: "Medila Beach", lat: 6.1207, lng: 80.1044 },
  { name: "Thalaiyadi Beach", lat: 9.6011, lng: 80.1915 },
  { name: "Gahirmatha Beach", lat: 20.7333, lng: 86.9167 },
  { name: "Mandarmani Beach", lat: 21.6702, lng: 87.7433 },
  { name: "Baindur Beach", lat: 13.8777, lng: 74.6175 },
  { name: "Bhatkal Beach", lat: 13.9872, lng: 74.5595 },
  { name: "Surathkal Beach", lat: 13.0155, lng: 74.7917 },
  { name: "Ullal Beach", lat: 12.8178, lng: 74.8605 },
  { name: "Vypin Island Beach", lat: 10.0452, lng: 76.2267 },
  { name: "Pantnam Beach", lat: 10.0145, lng: 76.2356 },
  { name: "Mobor Beach", lat: 15.1512, lng: 73.9415 },
  { name: "Chakratirth Beach", lat: 20.715, lng: 70.9876 },
  { name: "Bordi Beach", lat: 20.128, lng: 72.7067 },
  { name: "Tithal Beach", lat: 20.6173, lng: 72.6197 },
  { name: "Hedvi Beach", lat: 17.0232, lng: 73.2321 },
  { name: "Kevla Beach", lat: 19.588, lng: 72.749 },
  { name: "Suryalanka Beach", lat: 15.888, lng: 80.4592 },
  { name: "Uppada Beach", lat: 17.0467, lng: 82.27 },
  { name: "Manginapudi Beach", lat: 16.1882, lng: 81.1655 },
  { name: "Bheemunipatnam Beach", lat: 17.8916, lng: 83.4491 },
  { name: "Serenity Beach", lat: 11.9685, lng: 79.8571 },
  { name: "Karaikal Beach", lat: 10.9237, lng: 79.8415 },
  { name: "Auroville Beach", lat: 12.0094, lng: 79.8584 },
  { name: "Promenade Beach", lat: 11.9345, lng: 79.8357 },
  { name: "Bangaram Beach", lat: 10.938, lng: 72.2887 },
  { name: "Kalpeni Beach", lat: 10.1082, lng: 73.6455 },
  { name: "Porbandar Beach", lat: 21.6417, lng: 69.6293 },
  { name: "Ubharat Beach", lat: 21.0328, lng: 72.7312 },
];
// Populate the beach select dropdown
function populateBeachSelect() {
  beachSelect.innerHTML = '<option value="">-- Select a Beach --</option>';
  beaches.forEach((beach) => {
    const option = document.createElement("option");
    option.value = `${beach.lat},${beach.lng}`;
    option.textContent = beach.name;
    beachSelect.appendChild(option);
  });
}

// Show the map and nearby locations based on user's location
function showMapAndLocations(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  displayMap(lat, lng);
}

// Show the map and nearby locations based on selected beach
function showMapAndLocationsForBeach(lat, lng) {
  displayMap(lat, lng);
}

// Display the map
function displayMap(lat, lng) {
  mapDiv.style.display = "block";

  if (!map) {
    map = L.map("map").setView([lat, lng], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
  } else {
    map.setView([lat, lng], 14);
  }

  // Remove previous markers
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  // Add a marker for the selected location
  L.marker([lat, lng]).addTo(map).bindPopup("Selected Beach").openPopup();
}

// Display nearby hotels and restaurants
function displayHotelsAndRestaurants(lat, lng) {
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${lat},${lng})[amenity~"restaurant|hotel"];out;`;

  fetch(overpassUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.elements.length === 0) {
        alert("Sorry, no hotels or restaurants found near the selected beach.");
      } else {
        data.elements.forEach((place) => {
          L.marker([place.lat, place.lon])
            .addTo(map)
            .bindPopup(
              `<b>${place.tags.name || "Place"}</b><br>${place.tags.amenity}`
            );
        });
      }
    })
    .catch((error) =>
      console.error("Error fetching nearby hotels/restaurants:", error)
    );
}

// Display nearby hospitals
function displayHospitals(lat, lng) {
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${lat},${lng})[amenity="hospital"];out;`;

  fetch(overpassUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.elements.length === 0) {
        alert("Sorry, no hospitals found near the selected beach.");
      } else {
        data.elements.forEach((place) => {
          L.marker([place.lat, place.lon])
            .addTo(map)
            .bindPopup(
              `<b>${place.tags.name || "Hospital"}</b><br>${place.tags.amenity}`
            );
        });
      }
    })
    .catch((error) => console.error("Error fetching nearby hospitals:", error));
}

// Display nearby tourist places
function displayTouristPlaces(lat, lng) {
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${lat},${lng})[tourism~"attraction|museum|monument"];out;`;

  fetch(overpassUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.elements.length === 0) {
        alert("Sorry, no tourist places found near the selected beach.");
      } else {
        data.elements.forEach((place) => {
          L.marker([place.lat, place.lon])
            .addTo(map)
            .bindPopup(
              `<b>${place.tags.name || "Tourist Place"}</b><br>${
                place.tags.tourism
              }`
            );
        });
      }
    })
    .catch((error) =>
      console.error("Error fetching nearby tourist places:", error)
    );
}

// Display nearby petrol pumps
function displayPetrolPumps(lat, lng) {
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${lat},${lng})[amenity="fuel"];out;`;

  fetch(overpassUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.elements.length === 0) {
        alert("Sorry, no petrol pumps found near the selected beach.");
      } else {
        data.elements.forEach((place) => {
          L.marker([place.lat, place.lon])
            .addTo(map)
            .bindPopup(
              `<b>${place.tags.name || "Petrol Pump"}</b><br>${
                place.tags.amenity
              }`
            );
        });
      }
    })
    .catch((error) =>
      console.error("Error fetching nearby petrol pumps:", error)
    );
}

// Open and close sidebar
openSidebarBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});

// Event listener for Search Beach button
document.getElementById("searchBeachBtn").addEventListener("click", () => {
  beachSelectContainer.style.display = "block";
  sidebar.style.left = "-250px"; // Ensure sidebar is hidden
});

// Event listener for My Location button
document.getElementById("myLocationBtn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMapAndLocations, (error) =>
      alert(`Geolocation Error: ${error.message}`)
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

// Event listener for beach selection
beachSelect.addEventListener("change", function () {
  const selectedBeach = this.value;
  if (selectedBeach) {
    [selectedBeachLat, selectedBeachLng] = selectedBeach.split(",").map(Number);
    beachSelectContainer.style.display = "none"; // Hide beach select options
    sidebar.style.left = "0"; // Show sidebar
  }
});

// Event listener for Find Hospitals button
document.getElementById("findHospitalsBtn").addEventListener("click", () => {
  if (selectedBeachLat && selectedBeachLng) {
    displayMap(selectedBeachLat, selectedBeachLng);
    displayHospitals(selectedBeachLat, selectedBeachLng);
  }
});

// Event listener for Find Hotels & Restaurants button
document
  .getElementById("findHotelsRestaurantsBtn")
  .addEventListener("click", () => {
    if (selectedBeachLat && selectedBeachLng) {
      displayMap(selectedBeachLat, selectedBeachLng);
      displayHotelsAndRestaurants(selectedBeachLat, selectedBeachLng);
    }
  });

// Event listener for Find Tourist Places button
document
  .getElementById("findTouristPlacesBtn")
  .addEventListener("click", () => {
    if (selectedBeachLat && selectedBeachLng) {
      displayMap(selectedBeachLat, selectedBeachLng);
      displayTouristPlaces(selectedBeachLat, selectedBeachLng);
    }
  });

// Event listener for Find Petrol Pumps button
document.getElementById("findPetrolPumpsBtn").addEventListener("click", () => {
  if (selectedBeachLat && selectedBeachLng) {
    displayMap(selectedBeachLat, selectedBeachLng);
    displayPetrolPumps(selectedBeachLat, selectedBeachLng);
  }
});

// Initialize beach select options
populateBeachSelect();
