var map = L.map("map").setView([20, 0], 2); // Start at the center of the world with a zoom level of 2
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// List of beaches with their latitudes and longitudes
var beaches = [
  { name: "Marina Beach", lat: 13.0448, lng: 80.2785, country: "India" },
  { name: "Juhu Beach", lat: 19.0997, lng: 72.8335, country: "India" },
  { name: "Waikiki Beach", lat: 21.2766, lng: -157.8206, country: "USA" },
  { name: "Miami Beach", lat: 25.7907, lng: -80.13, country: "USA" },
  { name: "Santa Monica Beach", lat: 34.0194, lng: -118.4912, country: "USA" },
  { name: "Cannon Beach", lat: 45.8916, lng: -123.9613, country: "USA" },
  {
    name: "Cape Cod National Seashore",
    lat: 41.8772,
    lng: -69.9616,
    country: "USA",
  },
  {
    name: "Prince Edward Island",
    lat: 46.5107,
    lng: -63.4168,
    country: "Canada",
  },
  { name: "Playa del Carmen", lat: 20.6296, lng: -87.0739, country: "Mexico" },
  { name: "Tulum Beach", lat: 20.2117, lng: -87.4659, country: "Mexico" },
  { name: "Copacabana Beach", lat: -22.9711, lng: -43.1822, country: "Brazil" },
  { name: "Ipanema Beach", lat: -22.9838, lng: -43.2096, country: "Brazil" },
  { name: "Playa Blanca", lat: 38.973, lng: -0.7796, country: "Spain" },
  { name: "Playa Mancora", lat: -4.1686, lng: -81.0764, country: "Peru" },
  { name: "Playa del Amor", lat: 20.6162, lng: -105.447, country: "Mexico" },
  { name: "Bondi Beach", lat: -33.8915, lng: 151.2767, country: "Australia" },
  {
    name: "Whitehaven Beach",
    lat: -20.2833,
    lng: 149.0833,
    country: "Australia",
  },
  { name: "Cable Beach", lat: -17.964, lng: 122.206, country: "Australia" },
  { name: "Byron Beach", lat: -28.642, lng: 153.6121, country: "Australia" },
  { name: "Seven Mile Beach", lat: 18.3048, lng: -78.3393, country: "Jamaica" },
  {
    name: "Gray's Spay Beach",
    lat: 19.4344,
    lng: -74.5452,
    country: "Jamaica",
  },
  { name: "Eagle Beach", lat: 12.5479, lng: -70.0631, country: "Aruba" },
  { name: "Playa Paraiso", lat: 20.2166, lng: -87.4316, country: "Mexico" },
  {
    name: "Boracay Island",
    lat: 11.9674,
    lng: 121.9248,
    country: "Philippines",
  },
  { name: "Bali", lat: -8.3405, lng: 115.092, country: "Indonesia" },
  { name: "Phuket", lat: 7.8804, lng: 98.3923, country: "Thailand" },
  { name: "Koh Phi Phi", lat: 7.7368, lng: 98.7784, country: "Thailand" },
  { name: "Maldives", lat: 3.2028, lng: 73.2207, country: "Maldives" },
  {
    name: "Andaman and Nicobar Islands",
    lat: 11.7401,
    lng: 92.6586,
    country: "India",
  },
  {
    name: "Camps Bay Beach",
    lat: -33.951,
    lng: 18.3774,
    country: "South Africa",
  },
  {
    name: "Anse Source d'Argent",
    lat: -4.3645,
    lng: 55.8261,
    country: "Seychelles",
  },
  { name: "Zanzibar", lat: -6.1659, lng: 39.2026, country: "Tanzania" },
  { name: "Diani Beach", lat: -4.3186, lng: 39.5824, country: "Kenya" },
  {
    name: "Bora Bora",
    lat: -16.5004,
    lng: -151.7415,
    country: "French Polynesia",
  },
  { name: "Fiji Island", lat: -17.7134, lng: 178.065, country: "Fiji" },
  { name: "Rarotonga", lat: -21.2292, lng: -159.7762, country: "Cook Islands" },
  {
    name: "Saint Martin's Island",
    lat: 20.6082,
    lng: 92.3222,
    country: "Bangladesh",
  },
  {
    name: "Moorea",
    lat: -17.5388,
    lng: -149.8295,
    country: "French Polynesia",
  },
  { name: "Himchari Beach", lat: 21.3527, lng: 92.0516, country: "Bangladesh" },
  { name: "Kolatali Beach", lat: 21.4363, lng: 91.9826, country: "Bangladesh" },
  { name: "Inani Beach", lat: 21.2547, lng: 92.0344, country: "Bangladesh" },
  { name: "Cox's Bazar", lat: 21.4272, lng: 91.9856, country: "Bangladesh" },
  { name: "Puri Beach", lat: 19.7983, lng: 85.8249, country: "India" },
  {
    name: "Pati Sonepur Sea Beach",
    lat: 20.1736,
    lng: 86.4368,
    country: "India",
  },
  { name: "Rushikonda Beach", lat: 17.7917, lng: 83.3841, country: "India" },
  { name: "Kovalam Beach", lat: 8.4006, lng: 76.9786, country: "India" },
  { name: "Minicoy Thundi Beach", lat: 8.2834, lng: 73.0459, country: "India" },
  { name: "Eden Beach", lat: -33.9014, lng: 18.4128, country: "South Africa" },
  { name: "Kadmat Beach", lat: 11.2312, lng: 72.7788, country: "India" },
  { name: "Kappad Beach", lat: 11.3951, lng: 75.722, country: "India" },
  { name: "Kasarkod Beach", lat: 14.383, lng: 74.4619, country: "India" },
  { name: "Padubidri Beach", lat: 13.1331, lng: 74.785, country: "India" },
  { name: "Ghoghla Beach", lat: 20.7183, lng: 70.922, country: "India" },
  { name: "Shivrajpur Beach", lat: 22.3869, lng: 69.069, country: "India" },
  { name: "Dalasri Beach", lat: 15.2981, lng: 73.9906, country: "India" },
  { name: "Bilesaar Beach", lat: 15.2993, lng: 74.124, country: "India" },
  { name: "Chandrabagha Beach", lat: 19.8801, lng: 86.0851, country: "India" },
  { name: "Junput Beach", lat: 21.7471, lng: 87.8786, country: "India" },
  { name: "Hendry Island Beach", lat: 13.3177, lng: 92.7166, country: "India" },
  { name: "Shankar Pur Beach", lat: 21.6274, lng: 87.5637, country: "India" },
  { name: "Frasergunj Beach", lat: 21.5769, lng: 88.2575, country: "India" },
  { name: "Bhatkal Beach", lat: 13.9872, lng: 74.5595, country: "India" },
  { name: "Sasihithlu Beach", lat: 13.0975, lng: 74.7897, country: "India" },
  { name: "Ulal Beach", lat: 12.8178, lng: 74.8605, country: "India" },
  { name: "Alapula Beach", lat: 9.4942, lng: 76.3274, country: "India" },
  { name: "Maraari Beach", lat: 9.6054, lng: 76.2966, country: "India" },
  { name: "Cola Beach", lat: 15.0336, lng: 73.9745, country: "India" },
  { name: "Agonda Beach", lat: 15.0176, lng: 73.9872, country: "India" },
  { name: "Butterfly Beach", lat: 15.0043, lng: 74.0214, country: "India" },
  { name: "Nagoa Biu Beach", lat: 20.7231, lng: 70.9239, country: "India" },
  { name: "Devuka Beach", lat: 20.7119, lng: 70.9216, country: "India" },
  { name: "Yarada Beach", lat: 17.6562, lng: 83.282, country: "India" },
  { name: "Paradise Beach", lat: 11.9124, lng: 79.8354, country: "India" },
  { name: "Agatti Beach", lat: 10.8533, lng: 72.1943, country: "India" },
  { name: "Kavaratti Beach", lat: 10.5666, lng: 72.6358, country: "India" },
  { name: "Rameswaram Beach", lat: 9.2805, lng: 79.3129, country: "India" },
  { name: "Mahabalipuram Beach", lat: 12.6172, lng: 80.1927, country: "India" },
  { name: "Elliots Beach", lat: 13.0006, lng: 80.273, country: "India" },
  { name: "Malpe Beach", lat: 13.3596, lng: 74.7041, country: "India" },
  { name: "Gokarna Beach", lat: 14.5566, lng: 74.3168, country: "India" },
  { name: "Kudle Beach", lat: 14.5286, lng: 74.3103, country: "India" },
  { name: "Nivati Beach", lat: 16.2144, lng: 73.54, country: "India" },
  { name: "Tarkarli Beach", lat: 16.0402, lng: 73.4653, country: "India" },
  { name: "Velas Beach", lat: 17.947, lng: 73.0026, country: "India" },
  { name: "Diu Beach", lat: 20.7196, lng: 70.9194, country: "India" },
  { name: "Negombo Beach", lat: 7.2101, lng: 79.8388, country: "Sri Lanka" },
  {
    name: "Mount Lavinia Beach",
    lat: 6.8294,
    lng: 79.8652,
    country: "Sri Lanka",
  },
  { name: "Narigama Beach", lat: 6.1311, lng: 80.1, country: "Sri Lanka" },
  { name: "Goyambokka Beach", lat: 6.0276, lng: 80.7577, country: "Sri Lanka" },
  {
    name: "Kahandamodara Beach",
    lat: 6.0526,
    lng: 80.8867,
    country: "Sri Lanka",
  },
  { name: "Passikutha Beach", lat: 7.9942, lng: 81.5682, country: "Sri Lanka" },
  { name: "Morgala Beach", lat: 6.0538, lng: 80.6863, country: "Sri Lanka" },
  { name: "Vaduva Beach", lat: 6.4185, lng: 80.0056, country: "Sri Lanka" },
  { name: "Silent Beach", lat: 8.6767, lng: 81.2125, country: "Sri Lanka" },
  { name: "Kalametia Beach", lat: 6.0259, lng: 80.8512, country: "Sri Lanka" },
  { name: "Arisimale Beach", lat: 8.9597, lng: 79.8336, country: "Sri Lanka" },
  { name: "Medila Beach", lat: 6.1207, lng: 80.1044, country: "Sri Lanka" },
  { name: "Thalaiyadi Beach", lat: 9.6011, lng: 80.1915, country: "Sri Lanka" },
  { name: "Gahirmatha Beach", lat: 20.7333, lng: 86.9167, country: "India" },
  { name: "Mandarmani Beach", lat: 21.6702, lng: 87.7433, country: "India" },
  { name: "Baindur Beach", lat: 13.8777, lng: 74.6175, country: "India" },
  { name: "Bhatkal Beach", lat: 13.9872, lng: 74.5595, country: "India" },
  { name: "Surathkal Beach", lat: 13.0155, lng: 74.7917, country: "India" },
  { name: "Ullal Beach", lat: 12.8178, lng: 74.8605, country: "India" },
  { name: "Vypin Island Beach", lat: 10.0452, lng: 76.2267, country: "India" },
  { name: "Pantnam Beach", lat: 10.0145, lng: 76.2356, country: "India" },
];

// Add markers for each beach
var markers = {};
beaches.forEach(function (beach) {
  var marker = L.marker([beach.lat, beach.lng]).bindPopup(beach.name);

  markers[beach.name.toLowerCase()] = marker; // Store marker, but don't add to map yet
});

// Variable to store the user's current location
var userLocation = null;
var userLocationMarker = null;

// Global variable to store all the drawn blue traces
var drawnTraces = [];

// Function to calculate distance using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the Earth in km
  var dLat = (lat2 - lat1) * (Math.PI / 180);
  var dLon = (lon2 - lon1) * (Math.PI / 180);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = R * c; // Distance in km
  return distance.toFixed(2);
}

// Function to get the user's current location and mark it
function getUserLocation() {
  if (userLocation) {
    // If location is already available, skip the request
    updateUserLocation(userLocation);
    return;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLat = position.coords.latitude;
      var userLon = position.coords.longitude;

      // Store the location
      userLocation = { lat: userLat, lon: userLon };

      // Update the map with the user's location
      updateUserLocation(userLocation);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Function to update the map with the user's location
function updateUserLocation(location) {
  if (userLocationMarker) {
    map.removeLayer(userLocationMarker); // Remove previous marker if exists
  }

  const redIcon = L.icon({
    iconUrl: "red.png", // Provide the path to your red icon image
    iconSize: [35, 45], // Size of the icon
    iconAnchor: [20, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowUrl: "path/to/marker-shadow.png", // Optional: provide the path to the marker shadow image
    shadowSize: [41, 41], // Optional: size of the shadow image
  });

  userLocationMarker = L.marker([location.lat, location.lon], { icon: redIcon }) // Use the custom red icon
    .addTo(map)
    .bindPopup("You are here")
    .openPopup();

  map.setView([location.lat, location.lon], 12); // Center the map on the user's location
}

// Call getUserLocation to initially get the user's current location (run this once)
getUserLocation();

// Variable to hold the full name of the selected beach
var selectedBeach = null;

// Add event listener for search functionality
document.getElementById("search-input").addEventListener("input", function (e) {
  var searchTerm = e.target.value.toLowerCase().trim();
  let found = false;

  // Check if the input matches a beach name
  Object.keys(markers).forEach(function (beachName) {
    var marker = markers[beachName];

    if (beachName.includes(searchTerm) && searchTerm !== "") {
      found = true;
      selectedBeach = beachName; // Store the full name of the selected beach
    }
  });

  // Enable "Go" button only when a full beach name is typed
  if (found && selectedBeach) {
    document.getElementById("go-button").disabled = false;
  } else {
    document.getElementById("go-button").disabled = true;
  }
});

// Function to handle the "Go" button click
document.getElementById("go-button").addEventListener("click", function () {
  if (selectedBeach && markers[selectedBeach]) {
    var selectedMarker = markers[selectedBeach];
    map.setView(selectedMarker.getLatLng(), 9); // Zoom into the selected beach
    selectedMarker.openPopup(); // Open the popup for the selected beach
    getDistanceToBeach(selectedMarker, selectedBeach); // Show distance and traces
  }
});

// Function to get distance between the current location and selected beach
function getDistanceToBeach(beachMarker, beachName) {
  if (userLocation) {
    // Clear previous traces (blue lines)
    clearTraces();

    var distance = calculateDistance(
      userLocation.lat,
      userLocation.lon,
      beachMarker.getLatLng().lat,
      beachMarker.getLatLng().lng
    );

    // Add trace (blue line) between user location and selected beach
    var userLocationLatLng = L.latLng(userLocation.lat, userLocation.lon);
    var beachLocation = beachMarker.getLatLng();
    var blueTrace = L.polyline([userLocationLatLng, beachLocation], {
      color: "blue",
    }).addTo(map);
    drawnTraces.push(blueTrace); // Store the blue trace

    // Create the pop-up for distance info
    var popUpContent = `
      <div class="distance-popup">
        <p>Distance to ${beachName}: ${distance} km</p>
      </div>
    `;
    L.popup()
      .setLatLng(beachMarker.getLatLng())
      .setContent(popUpContent)
      .openOn(map);
  } else {
    alert("User location is not available.");
  }
}

// Function to clear all blue traces on the map
function clearTraces() {
  // Loop through each trace and remove it
  drawnTraces.forEach(function (trace) {
    map.removeLayer(trace);
  });
  // Clear the array of drawn traces
  drawnTraces = [];
}

// Function to close the distance pop-up
function closePopup() {
  var popup = document.querySelector(".leaflet-popup");
  if (popup) {
    popup.style.display = "none";
  }
}
function goToHome() {
  window.location.href = "home.html"; // Redirect to home page
}
