
let map;
let pickupAutocomplete;
let dropoffAutocomplete;

function initMap() {
  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.7392, lng: -104.9903 }, // Default to Denver, CO
    zoom: 12,
  });

  // Initialize autocomplete for pickup and dropoff
  pickupAutocomplete = new google.maps.places.Autocomplete(document.getElementById("pickup"));
  dropoffAutocomplete = new google.maps.places.Autocomplete(document.getElementById("dropoff"));

  // Add listener to pickup location
  pickupAutocomplete.addListener("place_changed", () => {
    const place = pickupAutocomplete.getPlace();
    if (place.geometry) {
      map.setCenter(place.geometry.location);
      new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: "Pickup Location",
      });
    }
  });

  // Add listener to dropoff location
  dropoffAutocomplete.addListener("place_changed", () => {
    const place = dropoffAutocomplete.getPlace();
    if (place.geometry) {
      new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: "Dropoff Location",
      });
    }
  });
}

window.initMap = initMap;
