const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
            const weatherDescription = data.weather[0].description;

            const weatherHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Could not fetch weather data.";
        });
});
