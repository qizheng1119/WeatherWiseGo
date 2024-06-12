/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let lat = 0;
let lon = 0;
let map;
let width;
let marker;
var icon1;
var des1;
var temp1;
var icon2;
var des2;
var temp2;
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
const curBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?';//get current weather
const apiOpen = '6b128e7311c4e187e1b9f41a10cacc13';//openweathermap api

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

var options = {
    componentRestrictions: {country: "my"}
};
var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);


document.addEventListener("DOMContentLoaded", getCurr);

function getCurr() {
    let header = document.getElementById("mapHeader");
    header.classList.add("active");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
                (position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            showMap();
        });
    } else {
        alert("Cannot get location");
    }
}

function showMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: lat, lng: lon},
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapId: 'a228daeeddfa13c8'
    });
    autocomplete2.bindTo('bounds', map);
    directionsDisplay.setMap(map);
    marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: {lat: lat, lng: lon}
    });
}

function calRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING
    };

    var place1 = autocomplete1.getPlace();
    var place2 = autocomplete2.getPlace();

    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            console.log(result);
            directionsDisplay.setDirections(result);
            displayWeatherDistance(place1.geometry.location.lat(), place1.geometry.location.lng(), place2.geometry.location.lat(), place2.geometry.location.lng(), result.routes[0].legs[0].distance.text, result.routes[0].legs[0].duration.text);
        } else {
            directionsDisplay.setDirections({routes: []});
            alert("Currently cannot fetch data");
        }
    });
}

async function displayWeatherDistance(lat1, lng1, lat2, lng2, km, hour) {
    const curUrl1 = `${curBaseUrl}lat=${lat1}&lon=${lng1}&appid=${apiOpen}&units=metric`;
    const curUrl2 = `${curBaseUrl}lat=${lat2}&lon=${lng2}&appid=${apiOpen}&units=metric`;

    try {
        const response1 = await fetch(curUrl1);
        const data1 = await response1.json();
        icon1 = data1.weather[0].icon;
        des1 = data1.weather[0].description;
        temp1 = data1.main.temp;

        const response2 = await fetch(curUrl2);
        const data2 = await response2.json();
        icon2 = data2.weather[0].icon;
        des2 = data2.weather[0].description;
        temp2 = data2.main.temp;

        let cls = document.getElementById("expandButton");
        cls.innerHTML = `<button onClick="openNav()" class="ps-3 pe-3 pt-1 pb-1 bg-info" style="border-top-right-radius:5px;border-bottom-right-radius:5px;">
                <span><i class="fa-solid fa-expand"></i></span>
            </button>`;
        let exp = document.getElementById("displayDetail");
        exp.innerHTML = `<div class="sidenav bg-info" id="mySidenav">
                <a href="javascript:void(0)" onclick="closeNav()" class="clsbutton position-absolute pt-1">
                    <i class="fa-solid fa-minimize" style="color:black"></i>
                </a>
                <div class="container h-100 d-flex flex-column align-items-center justify-content-center">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
        <h3 class="text-light">Origin</h3>
                            <div class="row">
                                <img class="col-md-7" src="https://openweathermap.org/img/wn/${icon1}@2x.png"
                                     alt="${des1}">
                                <h5 class="text-light col-md-5 align-self-center">${temp1}&#176C</h5>
                            </div>
                        </div>
                        <div class="col-md-6 align-self-center">
        <h3 class="text-light">Destination</h3>
                            <div class="row">
                                <img class="col-md-7" src="https://openweathermap.org/img/wn/${icon2}@2x.png"
                                     alt="${des2}">
                                <h5 class="text-light col-md-5 align-self-center">${temp2}&#176C</h5>
                            </div>
                        </div>
                    </div>
        <h2 class="text-light">Total Distance: ${km}</h2>
        <h2 class="text-light">Duration: ${hour}</h2>
                </div>
            </div>`;
        document.getElementById("mySidenav").style.width = "800px";
        width = "800px";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}


function showPlace() {
    var place = autocomplete2.getPlace();
    if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
    }

    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
        map.setCenter(place.geometry.location);
        getCurrentWeather(place.geometry.location.lat(), place.geometry.location.lng());
    }
}

function getCurrentWeather(lat, lon) {
    let curUrl = `${curBaseUrl}lat=${lat}&lon=${lon}&appid=${apiOpen}&units=metric`;
    fetch(curUrl)
            .then(response => response.json())
            .then(data => {
                let today = new Date(data.dt * 1000);
                console.log(today + " " + data.main.temp);
                let cls = document.getElementById("expandButton");
                cls.innerHTML = `<button onClick="openNav()" class="ps-3 pe-3 pt-1 pb-1 bg-info" style="border-top-right-radius:5px;border-bottom-right-radius:5px;">
                <span><i class="fa-solid fa-expand"></i></span>
            </button>`;
                let exp = document.getElementById("displayDetail");
                exp.innerHTML = `<div class="sidenav bg-info" id="mySidenav">
            <a href="javascript:void(0)" onclick="closeNav()" class="clsbutton position-absolute pt-1">
                <i class="fa-solid fa-minimize" style="color:black"></i>
            </a>
            <div class ="container h-100 d-flex flex-column align-items-center justify-content-center">
                <div class="row">
                    <img class="col-md-7" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                         alt="${data.weather[0].description}">
                    <h3 class="text-light col-md-5 align-self-center">${data.main.temp}&#176C</h3>
                </div>
                <br>
                <h5 class="text-light">Feels like ${data.main.feels_like}&#176C</h5>
                <br>
                <div class="row w-100">
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
            </div>
        </div>`;
                document.getElementById("mySidenav").style.width = "600px";
                width = "600px";
            })
            .catch(console.error);
}

function openNav() {
    document.getElementById("mySidenav").style.width = width;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openOriginInput() {
    const originInput = document.getElementById('to');
    const searchButton = document.getElementById('searchButton');
    if (document.getElementById("origin").style.display === "none") {
        document.getElementById("origin").style.display = "flex";
        originInput.placeholder = "Destination";
        searchButton.setAttribute('onclick', 'calRoute()');
    } else {
        document.getElementById("origin").style.display = "none";
        originInput.placeholder = "Get Location";
        searchButton.setAttribute('onclick', 'showPlace()');
    }

}