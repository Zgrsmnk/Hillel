function getWeather() {
  const weatherResponse = fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=50.4473092&lon=30.5227896&appid=60a6e85ae014194d7b2597e684009bc0&units=metric&lang=ua",
  );

  weatherResponse
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      const city = document.querySelector(".city");
      const temp = document.querySelector(".temp");
      const desc = document.querySelector(".description");
      const wind = document.querySelector(".wind");
      const icon = document.querySelector(".icon");
      const date = document.querySelector(".date");
      const currentDate = new Date();

      city.textContent = result.name;
      temp.textContent = `Temp: ${Math.round(result.main.temp)}°C`;
      desc.textContent = result.weather[0].description;
      wind.textContent = `Wind: ${result.wind.speed}m/s`;
      icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
      date.textContent = currentDate.toLocaleDateString("uk-UA", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    });
};

getWeather();
const button = document.querySelector(".reload");
button.addEventListener("click", function () {
  getWeather();
});