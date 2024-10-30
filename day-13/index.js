// console.log(apikey)

const getCurrentWeatherData = async () => {
  const city = 'Barranquilla'
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  )

  return response.json()
}

// object destructuring with renaming ({ name: city })
// Renaming with name: city
// 1. It extracts the name property from the passed object.
// 2. It renames it to city, so instead of a variable called name, you get
// a variable called city that holds the value of name.
const getHourlyForecast = async ({ name: city }) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  )
  const data = await response.json()
  console.log(data)
}

// Formatting the temperature
const formatTemperature = (temp) => `${temp?.toFixed(1)}°`

const loadCurrentForecast = ({
  name,
  main: { temp, temp_min, temp_max },
  weather: [{ description }],
}) => {
  // Scoping within a Specific Element
  // Improves Readability and Organization, Performance Optimization
  const currentForecastElement = document.querySelector('#current-forecast')

  // When you query the parent element first and then perform additional querySelector calls
  // on it, it scopes all subsequent queries to that specific parent element and its child
  // elements only. This is not just syntax sugar—it’s actually changing the scope of your DOM queries.
  currentForecastElement.querySelector('.city').textContent = name
  currentForecastElement.querySelector('.temp').textContent =
    formatTemperature(temp)
  currentForecastElement.querySelector('.description').textContent = description
  currentForecastElement.querySelector(
    '.min-max-temp'
  ).textContent = `H:${formatTemperature(temp_max)} L:${formatTemperature(
    temp_min
  )}`
}

document.addEventListener('DOMContentLoaded', async () => {
  preventDefault()
  // console.log(await getCurrentWeatherData())

  const currentWeather = await getCurrentWeatherData()
  loadCurrentForecast(currentWeather)
  getHourlyForecast(currentWeather)
})

/*
JSON format API response example
                          
{
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 284.2,
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      "sea_level": 1021,
      "grnd_level": 910
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
}                    
*/

/*
{
    "coord": {
        "lon": -74.7964,
        "lat": 10.9639
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 28.88,
        "feels_like": 35.27,
        "temp_min": 28.88,
        "temp_max": 28.88,
        "pressure": 1007,
        "humidity": 84,
        "sea_level": 1007,
        "grnd_level": 1004
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 20
    },
    "clouds": {
        "all": 20
    },
    "dt": 1730270978,
    "sys": {
        "type": 1,
        "id": 8584,
        "country": "CO",
        "sunrise": 1730285419,
        "sunset": 1730327710
    },
    "timezone": -18000,
    "id": 3689147,
    "name": "Barranquilla",
    "cod": 200
}
*/
