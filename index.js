const API_KEY = "95aed432f2ca15887441622984591fa1"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  const value = document.getElementById('city').value
  fetchCurrentWeather(value)
  fetchFiveDayForecast(value)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + `&APPID=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(responseJSON => displayCurrentWeather(responseJSON))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  const mainData = json.main
  const temp = document.getElementById('temp')
  const low = document.getElementById('low')
  const high = document.getElementById('high')
  const humidity = document.getElementById('humidity')
  const cloudCover = document.getElementById('cloudCover')
  temp.innerHTML = mainData.temp + "C"
  low.innerHTML = mainData.temp_min + "C"
  high.innerHTML = mainData.temp_max + "C"
  humidity.innerHTML = mainData.humidity + "%"
  cloudCover.innerHTML = json.clouds.all  + "%"
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city 
   fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + `&APPID=${API_KEY}&units=metric`)
   // .json() is a build-in function
    .then(response => response.json())
    .then(responseJSON => {
      displayFiveDayForecast(responseJSON)
      createChart(responseJSON)
    }) 
}

// we are creating a varaible 'json' here by directly passing it into a function
function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API  
  const forecast = json.list
  const aside = document.querySelector('aside')
  let counter = 0
  let lowAverageTemp = 0
  let highAverageTemp = 0
  forecast.forEach((eachForecastItem) => {
    counter++
    // this is adding the low temperatures from this date
    lowAverageTemp += eachForecastItem.main.temp_min
    
    // this is adding the high temperatures from this date
    highAverageTemp += eachForecastItem.main.temp_max
    if (counter === 8) {
      counter = 0
      const div = document.createElement('div')
      div.innerHTML = `<p>${eachForecastItem.dt_txt}</p>
      <p>${Math.round(lowAverageTemp / 8)}</p>
      <p>${Math.round(highAverageTemp / 8)}</p>`
      lowAverageTemp = 0
      highAverageTemp = 0
      aside.appendChild(div)
    }
  })
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
  const ctx = document.getElementById('WeatherChart').getContext('2d')
  const labels = json.list.map((increment) => increment.dt_txt)
  console.log(labels)
  const data = json.list.map((increment) => increment.main.temp)
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        // calling the 'labels' variable above. 'labels:' below is a key. same thing with 'data'
         labels: labels,
        datasets: [{
            label: 'Forecast',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit', handleFormSubmit)
})

