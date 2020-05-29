const COORDS = 'coords'
const API = '223c0bedacd05ce69e112587fda60793'
const weather = document.querySelector('.weather');

function getWeather(lat,lng){

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+API + '&units=metric'
    ).then(function(response){
        return response.json();
    }).then(function(json){
        var temperature = json.main.temp;
        var loc = json.name;
        weather.innerHTML = '온도 : '+ temperature + '<br>' + '위치 : ' + loc;
    }
    )
    
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude,longitude)
    saveCoords(coordsObj);
}
function handleHeoError(){
    console.log("Can not access the loation");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleHeoError);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords == null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
    localStorage.clear();
}

function init(){
    loadCoords();
}
init();