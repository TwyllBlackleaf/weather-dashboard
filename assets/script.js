// Global Variables
var searchTerm = "";
var cityObj = {
    input: "",
    cityName: "",
    lat: "",
    long: "",
};
var searchHistory = [];


// Document Elements
var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search-input");

// Functions
var searchWeather = function(event) {
    event.preventDefault();
    console.log("search");

    // Get the input from #search-input

    // Geocode it to get latitude and longitude

    // append the search term, city name, lat, and long to the array of search history buttons

    // store the array in localStorage

    // call getWeather with said city, latitude, and longitude
}

var getWeather = function(city, lat, long) {
    // set the city name to display in relevant places

    // Use lat and long to find weather for a location

    // Display current weather in current-weather div

    // Display forecast in forecast cards
}

var savedWeather = function() {
    // Use id of button to get corresponding saved weather object from the array
    // call getWeather() with the lat and long from that object
}

// Event Listeners
searchFormEl.addEventListener("submit", searchWeather); 

// Add a click event listener to the dynamically generated search history buttons
