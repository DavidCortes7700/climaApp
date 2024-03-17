//Variables
let apiKey = 'a1e3ad2e5ddf1b61cd095fd0b5bad4a2';
let diferenciaKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let cityName = document.querySelector('#ciudadEntrada');
let buttonCalculate = document.querySelector('#botonBusqueda').addEventListener('click', () => {
    const city = cityName.value;
    if(city){
        fetchWeatherData(city)
    }
})
let resultCalculateWeather = document.querySelector('#datosClima');

//Funciones normales
function fetchWeatherData(city){
    fetch(`${urlBase}?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => showWeatherData(response));
};

function showWeatherData(response) {
    resultCalculateWeather.innerHTML='';
    const nameCity = response.name;
    const nameCountry = response.sys.country;
    const cityTemp = response.main.temp;
    const description = response.weather[0].description;
    const humedad = response.main.humidity;
    const icono = response.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = nameCity+', '+nameCountry;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `la temperatura es: ${Math.floor(cityTemp-diferenciaKelvin)} °C`;

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`
    
    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcion = document.createElement('p');
    descripcion.textContent = `la descripción meteorológica es: ${description}`;

    resultCalculateWeather.appendChild(ciudadTitulo)
    resultCalculateWeather.appendChild(temperaturaInfo)
    resultCalculateWeather.appendChild(humedadInfo)
    resultCalculateWeather.appendChild(iconoInfo)
    resultCalculateWeather.appendChild(descripcion)
}