const apiKey ="";
const apiUrl ="";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wether-icon");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status==404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
     
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "clouds"){
        weatherIcon.src ="image/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src ="image/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src ="image/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src ="image/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src ="image/mist.png"
    }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

    }


    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "clouds"){
        weatherIcon.src ="image/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src ="image/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src ="image/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src ="image/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src ="image/mist.png"
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

checkWeather();