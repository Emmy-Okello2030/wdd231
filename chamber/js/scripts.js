// Fetch and display weather data
async function fetchWeather() {
    const apiKey = 'd892036b5d3bce014d5aeb6b0faeb534'; // Replace with your OpenWeatherMap API key
    const city = 'Nairobi'; // Replace with your city
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }
        const data = await response.json();

        const weatherContainer = document.getElementById('weather-container');
        const currentWeather = `
            <p>Current Temperature: ${data.list[0].main.temp}°C</p>
            <p>Weather: ${data.list[0].weather[0].description}</p>
        `;

        const forecast = data.list.slice(1, 4).map(day => `
            <p>${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°C</p>
        `).join('');

        weatherContainer.innerHTML = currentWeather + forecast;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Fetch and display spotlight members
async function fetchSpotlight() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error("Failed to fetch spotlight members data.");
        }
        const members = await response.json();

        const goldAndSilver = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
        const randomMembers = goldAndSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = '';

        randomMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('spotlight-card');
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching spotlight members:", error);
    }
}

// Footer dynamic content
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Initialize functions on page load
fetchWeather();
fetchSpotlight();