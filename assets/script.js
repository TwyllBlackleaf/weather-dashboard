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
var cityNameEl = document.querySelector("#city-name");

// Functions
var searchWeather = function(event) {
    event.preventDefault();
    console.log("search");

    // Get the input from #search-input
    cityObj.input = searchInputEl.value;
    console.log(cityObj.input);

    // Geocode it to get latitude and longitude
    fetch(`https://api.geocod.io/v1.6/geocode?q=${cityObj.input}&api_key=21d7d19560980625866b0b6b82569b6b66b15d6&limit=1`)
        .then(function(response) {
            response.json()
                .then(function(data) {
                    //to do: make sure something actually got returned

                    cityObj.cityName = data.results[0].address_components.city; // to do: add error checking to make sure there IS a city
                    cityObj.lat = data.results[0].location.lat;
                    cityObj.long = data.results[0].location.lng;

                     // append the search term, city name, lat, and long to the array of search history buttons

                    // store the array in localStorage

                    // call getWeather with said city, latitude, and longitude
                    getWeather(cityObj.cityName, cityObj.lat, cityObj.long);
                }) 
        })

   
}

var getWeather = function(city, lat, long) {
    // set the city name to display in relevant places
    cityNameEl.textContent = city;

    // Use lat and long to find weather for a location
    fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly,alerts&appid=b24e2873602c0d7d47d5fbf2c9c9524b`)
        .then(function(response) {
            response.json()
                .then(function(data) {
                    console.log(data);

                    // Display current weather in current-weather div
                    var tempSpanEl = document.querySelector("#temp-span");
                    tempSpanEl.textContent = data.current.temp;

                    var windSpanEl = document.querySelector("#wind-span");
                    windSpanEl.textContent = data.current.wind_speed;

                    var humiditySpanEl = document.querySelector("#humidity-span");
                    humiditySpanEl.textContent = data.current.humidity;

                    var uvSpanEl = document.querySelector("#uv-span");
                    var uvIndex = data.current.uvi;
                    uvSpanEl.textContent = uvIndex;

                    // Change the bg color of the UV Index span depending on severity

                    // Display forecast in forecast cards
                })
        })

    
}

var loadSaved = function() {
    // load localStorage and parse back to array
    // for loop to make a button for each item in search history
    // give each button an id of i
}

var savedWeather = function() {
    // Use id of button to get corresponding saved weather object from the array
    // call getWeather() with the lat and long from that object
}

// Event Listeners
searchFormEl.addEventListener("submit", searchWeather); 

// Add a click event listener to the dynamically generated search history buttons
