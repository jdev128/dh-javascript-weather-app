const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "OPEN_WEATHER_API_KEY";

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("button#search").addEventListener("click", () => {
        const CITY = document.querySelector("input#city").value.trim();
		if (CITY.length >= 3) {
			getForecast(CITY)
				.then((forecast) => showForecast(forecast))
				.catch((error) => {
                    document.getElementById("forecast-container").innerHTML =
					error.message;
                });
		} else {
			alert("Debes ingresar tres letras como mínimo");
		}
	});
});

function getForecast(city) {
	return fetch(
		`${BASE_URL}?units=metric&lang=es&appid=${API_KEY}&q=${city}`
	).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(
				"No se encontró ninguna ciudad que coincida con lo ingresado."
			);
		}
	});
}

function showForecast(forecast) {
	const city = forecast.name;
	const country = forecast.sys.country;
	const temperature = Number.parseInt(forecast.main.temp);
	const humidity = forecast.main.humidity;
	const icon = forecast.weather[0].icon;
	const description = forecast.weather[0].description;

	const cityNode = document.createElement("h2");
	cityNode.textContent = `${city}, ${country}`;

	const temperatureNode = document.createElement("p");
	temperatureNode.textContent = `Temperatura actual: ${temperature}º`;

	const humidityNode = document.createElement("p");
	humidityNode.textContent = `Humedad: ${humidity}%`;

	const iconNode = document.createElement("img");
	iconNode.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

	const descriptionNode = document.createElement("p");
	descriptionNode.textContent =
		description[0].toUpperCase() + description.slice(1);

	const FORECAST_CONTAINER = document.getElementById("forecast-container");
	FORECAST_CONTAINER.innerHTML = "";

	FORECAST_CONTAINER.appendChild(cityNode);
	FORECAST_CONTAINER.appendChild(iconNode);
	FORECAST_CONTAINER.appendChild(descriptionNode);
	FORECAST_CONTAINER.appendChild(temperatureNode);
	FORECAST_CONTAINER.appendChild(humidityNode);
}
