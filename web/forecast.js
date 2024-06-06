/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const curBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?';//get current weather
const forBaseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';//get forecast
const apiOpen = '6b128e7311c4e187e1b9f41a10cacc13';//openweathermap api
const apiGif = "bb39r1HmGN0yDNLfMF9pReqQxBUwem4e"; //giphy api
const gifBaseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiGif}&limit=1&q=`; //giphy url

document.addEventListener("DOMContentLoaded", getCurrentLoc);//run this function when open html

function getCurrentLoc() {
    //check geolocation (can get current location or not)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currLoc);
    } else {
        alert("Cannot get location");
    }
}

//get current location
function currLoc(position) {
    let lat = position.coords.latitude.toFixed(2);
    let lon = position.coords.longitude.toFixed(2);
    getCurrentWeather(lat, lon);
    getForecast(lat, lon);
}

//get current weather
function getCurrentWeather(lat, lon) {
    let curUrl = `${curBaseUrl}lat=${lat}&lon=${lon}&appid=${apiOpen}&units=metric`;
    fetch(curUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let today = new Date(data.dt * 1000);
            let cur = document.getElementById("currentWeather");
            let des = data.weather[0].main;
            cur.innerHTML = `<div>
            <h6 class="text-light fw-bold">
                Current Weather <br> ${today.toDateString()}
            </h6>
            <div class="row h-100 d-flex align-items-center justify-content-center">
                <div class="col-md-3">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                        alt="${data.weather[0].description}">
                </div>
                <div class="col-md-4">
                    <h1 class="text-light">${data.main.temp}&#176C</h1>
                </div>
                <div class="col-md-5">
                    <div>
                        <h3 class="text-light fw-bold text-capitalize">${data.weather[0].description}</h3>
                        <h5 class="text-light fw-normal">Feels like ${data.main.feels_like}&#176C</h5>
                    </div>
                </div>
            </div>
            <br>
            <div class="row h-100 d-flex align-items-center justify-content-center">
                <div class="col-md-3">
                    <p class="text-light">Wind</p>
                    <h5 class="text-light">${data.wind.speed} m/s</h5>
                </div>
                <div class="col-md-3">
                    <p class="text-light">Humidity</p>
                    <h5 class="text-light">${data.main.humidity}%</h5>
                </div>
                <div class="col-md-3">
                    <p class="text-light">Visibility</p>
                    <h5 class="text-light">${data.visibility / 1000} km</h5>
                </div>
                <div class="col-md-3">
                    <p class="text-light">Pressure</p>
                    <h5 class="text-light">${data.main.pressure} hPa</h5>
                </div>
            </div>
        </div>`;
            getGiphy(des);
        })
        .catch(console.error);
}

function getForecast(lat, lon) {
    let curForUrl = `${forBaseUrl}lat=${lat}&lon=${lon}&appid=${apiOpen}&units=metric`;
    fetch(curForUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let forPage = document.getElementById("forecastWeather");
            const indexs = [8, 16, 24, 32];
            let getData = indexs.map(index => data.list[index]);
            forPage.innerHTML = getData.map((day, i) => {
                let dateDay = new Date(day.dt * 1000);
                return `<div class="align-self-center col-md-3">
                <div class="card ms-2 me-2" style="background-color: #989898;">
                    <p class="p-2 card-title text-light">${dateDay.toDateString()}</p>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top"
                        alt="${day.weather[0].description}" style="width:50%">
                    <div class="card-body">
                        <p class="card-text text-light">Max : ${day.main.temp_max}&#176C</p>
                        <p class="card-text text-light">Min : ${day.main.temp_min}&#176C</p>
                    </div>
                </div>
            </div>`;
            }).join(' ');
        })
        .catch(console.error);
}

//get giphy
function getGiphy(des) {
    let giphyUrl = gifBaseUrl + encodeURIComponent(des);
    fetch(giphyUrl)
        .then(response => response.json())
        .then(content => {
            if (content.data.length > 0) {
                let img = content.data[0].images.downsized.url;
                let gifImg = document.getElementById("gifBack");
                gifImg.style.backgroundImage=`url(${img})`;
                gifImg.style.backgroundPosition="center";
                gifImg.style.backgroundSize="cover";
            } else {
                alert("No results found");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error fetching data");
        });
}

