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
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
  )
  const data = await response.json()
  console.log('data: ', data)
  return data.list.map((forecast) => {
    const {
      main: { temp, temp_max, temp_min },
      dt,
      dt_txt,
      weather: [{ description, icon }],
    } = forecast
    return { temp, temp_max, temp_min, dt, dt_txt, description, icon }
  })
}

// * Formatting the temperature
const formatTemperature = (temp) => `${temp?.toFixed(1)}°`
// * Creating the icon
const createIconUrl = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`
// ********************

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

const loadHourlyForecast = (hourlyForecast) => {
  console.log('hourlyForecast: ', hourlyForecast)
  let dataFor12Hours = hourlyForecast.slice(1, 13)
  const hourlyContainer = document.querySelector('.hourly-container')
  let innerHTMLString = ``

  for (let { temp, icon, dt_txt } of dataFor12Hours) {
    console.log('dt_txt: ', dt_txt)
    innerHTMLString += `
      <article>
        <h3 class="time">${dt_txt.split(' ')[1]}</h3>
        <img class="icon" src="${createIconUrl(icon)}" alt="icon" />
        <p class="hourly-map">${formatTemperature(temp)}</p>
      </article>
    `
  }
  hourlyContainer.innerHTML = innerHTMLString
}

const loadFeelsLike = ({ main: { feels_like } }) => {
  const container = document.querySelector('#feels-like')
  container.querySelector('.feels-like-temp').textContent =
    formatTemperature(feels_like)
}

const loadHumidity = ({ main: { humidity } }) => {
  const container = document.querySelector('#humidity')
  container.querySelector('.humidity-value').textContent = `${humidity} %`
}

document.addEventListener('DOMContentLoaded', async () => {
  // preventDefault()
  // console.log(await getCurrentWeatherData())

  const currentWeather = await getCurrentWeatherData()
  loadCurrentForecast(currentWeather)

  const hourlyForecast = await getHourlyForecast(currentWeather)
  loadHourlyForecast(hourlyForecast)

  loadFeelsLike(currentWeather)

  loadHumidity(currentWeather)
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

/*                     
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1647345600,
      "main": {
        "temp": 287.39,
        "feels_like": 286.38,
        "temp_min": 286.69,
        "temp_max": 287.39,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 58,
        "temp_kf": 0.7
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 71
      },
      "wind": {
        "speed": 3.08,
        "deg": 128,
        "gust": 4.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-03-15 12:00:00"
    },
    {
      "dt": 1647356400,
      "main": {
        "temp": 287.09,
        "feels_like": 286.13,
        "temp_min": 286.5,
        "temp_max": 287.09,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1016,
        "humidity": 61,
        "temp_kf": 0.59
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 81
      },
      "wind": {
        "speed": 3.28,
        "deg": 168,
        "gust": 3.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-03-15 15:00:00"
    },
    {
      "dt": 1647367200,
      "main": {
        "temp": 285.44,
        "feels_like": 284.6,
        "temp_min": 284.47,
        "temp_max": 285.44,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1016,
        "humidity": 72,
        "temp_kf": 0.97
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 90
      },
      "wind": {
        "speed": 2.7,
        "deg": 183,
        "gust": 5.59
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-03-15 18:00:00"
    },
    .....
        {
      "dt": 1647766800,
      "main": {
        "temp": 282.42,
        "feels_like": 280,
        "temp_min": 282.42,
        "temp_max": 282.42,
        "pressure": 1036,
        "sea_level": 1036,
        "grnd_level": 1033,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 39
      },
      "wind": {
        "speed": 4.58,
        "deg": 83,
        "gust": 8.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-03-20 09:00:00"
    }
  ],
  "city": {
    "id": 2643743,
    "name": "London",
    "coord": {
      "lat": 51.5085,
      "lon": -0.1257
    },
    "country": "GB",
    "population": 1000000,
    "timezone": 0,
    "sunrise": 1647324902,
    "sunset": 1647367441
  }
}
*/
