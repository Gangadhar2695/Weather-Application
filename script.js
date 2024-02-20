
const apiKey = "8d33a3a0f132f113585167c3688b7efc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-button");

async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
   if(response.status == 400){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";

   }else{
   
   
   const data = await response.json();

   console.log(data)

document.querySelector(".city").innerHTML = "Weather in " + data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
document.querySelector(".humidity").innerHTML = "Humidity:" + data.main.humidity + "%";
document.querySelector(".wind").innerHTML = "Wind speed:" + data.wind.speed + " km/h";
document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
document.querySelector(".description").innerHtml = data.weather[0].description;

document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + data.name + "')";

document.querySelector(".weather").classList.remove("loading");


document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});






