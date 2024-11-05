// console.log(apikey)
// 31 minutes
const DAYS_OF_THE_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

const getCitiesUsingGeolocation = async (searchText) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${apikey}`
  )
  return response.json()
}

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

const loadHourlyForecast = (
  { main: { temp: tempNow }, weather: [{ icon: iconNow }] },
  hourlyForecast
) => {
  console.log('hourlyForecast: ', hourlyForecast)

  const timeFormatter = Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
  })
  // slice method to create a new array containing a portion of the hourlyForecast array,
  // starting from the second element (index 1) up to, but not including, the thirteenth element (index 13).
  let dataFor12Hours = hourlyForecast.slice(2, 14) // 12 entries
  const hourlyContainer = document.querySelector('.hourly-container')
  let innerHTMLString = `<article>
            <h3 class="time">Now</h3>
            <img class="icon" src="${createIconUrl(iconNow)}" />
            <p class="hourly-temp">${formatTemperature(tempNow)}</p>
          </article >`

  for (let { temp, icon, dt_txt } of dataFor12Hours) {
    console.log('dt_txt: ', dt_txt)
    // Splitting the Date-Time String: dt_txt.split(' ')
    // Accessing the Second Element: dt_txt.split(' ')[1]
    innerHTMLString += `<article>
            <h3 class="time">${timeFormatter.format(new Date(dt_txt))}</h3>
            <img class="icon" src="${createIconUrl(icon)}" />
            <p class="hourly-temp">${formatTemperature(temp)}</p>
          </article>`
  }
  hourlyContainer.innerHTML = innerHTMLString
}

const calculateDayWiseForecast = (hourlyForecast) => {
  let dayWiseForecast = new Map()
  for (let forecast of hourlyForecast) {
    // Splitting the Date-Time String: ["2022-03-15", "12:00:00"]
    // array destructuring: [date] extracts the first element of the array ("2022-03-15") and assigns it to the variable date.
    const [date] = forecast.dt_txt.split(' ')
    // Creating a Date Object
    // new Date(date) creates a Date object based on the value of date. This is needed to work with date methods, like getDay().

    // getDay() to find the day of the week as a number (from 0 to 6, where 0 is Sunday, 1 is Monday, etc.).
    const dayOfTheWeek = DAYS_OF_THE_WEEK[new Date(date).getDay()]
    console.log('dayOfTheWeek: ', dayOfTheWeek)

    // If the Day Exists
    // If another forecast for Example: Monday appears:
    // This checks if dayWiseForecast already has an entry (key) for dayOfTheWeek (e.g., "mon", "tue", etc.).
    if (dayWiseForecast.has(dayOfTheWeek)) {
      // Retrieves the existing array of forecasts for that day with Example: { "mon": [forecast1, forecast2] }.
      let forecastForTheDay = dayWiseForecast.get(dayOfTheWeek)
      // Adds the new forecast to this array with forecastForTheDay.push(forecast)
      forecastForTheDay.push(forecast)

      // updating the dayWiseForecast map with the key dayOfTheWeek and setting its value to the updated array of
      // forecasts stored in forecastForTheDay.
      dayWiseForecast.set(dayOfTheWeek, forecastForTheDay)
    } else {
      // If the Day Doesn’t Exist
      // For example, if dayOfTheWeek is "mon" and this is the first forecast for Monday:
      // The code enters the else block, adding a new entry like { "mon": [forecast] }.

      // Initializing a New Array:
      // The forecast variable is wrapped in brackets ([forecast]) to create an array containing that
      // single forecast object.

      // Enabling Future Additions:
      // This allows you to later push more forecast objects for the same day into the existing array
      // without needing to check the type or create a new array.
      dayWiseForecast.set(dayOfTheWeek, [forecast])
    }
  }
  console.log('dayWiseForecast: ', dayWiseForecast)

  // Map array of arays
  // Array.from(dayWiseForecast) run this in the console devtools

  // for...of loop starts:
  // Iterates over each entry in dayWiseForecast. Each entry has a key (like a day of the week) and a value (an array of forecast objects for that day).
  for (let [key, value] of dayWiseForecast) {
    // 1. mapping function: val => val.temp_min
    // It’s used to transform each item in the original array (value in this case) to something else.
    // It takes each element (val) from the value array and returns only val.temp_min.
    // This results in a new array that contains only the temp_min values from each forecast object in value

    // 2. Spread operator (...):
    // The resulting array of temp_min (or temp_max) values is spread into individual arguments.
    // Math.min(...[10, 12, 8]) to this => Math.min(10, 12, 8)
    // This way, Math.min (or Math.max) can compare each value individually and return the smallest (or largest) one.
    let temp_min = Math.min(...Array.from(value, (val) => val.temp_min))
    let temp_max = Math.max(...Array.from(value, (val) => val.temp_min))

    // By calling dayWiseForecast.set(key, ...), you are updating or replacing the entry for that day.
    // key: Here, it's a string representing the day of the week (e.g., "mon", "tue").

    // icon: value.find(v => v.icon).icon:
    // value.find(v => v.icon) returns the first forecast object with an icon.
    // .icon extracts that icon.
    dayWiseForecast.set(key, {
      temp_min,
      temp_max,
      icon: value.find((v) => v.icon).icon,
    })
  }
  console.log('dayWiseForecast: ', dayWiseForecast)
  return dayWiseForecast
}

const loadFiveDayForecast = (hourlyForecast) => {
  console.log(hourlyForecast)
  const dayWiseForecast = calculateDayWiseForecast(hourlyForecast)
  const container = document.querySelector('.five-day-forecast-container')
  let dayWiseInfo = ''
  // 1. Array.from(dayWiseForecast)
  // This converts the dayWiseForecast map into an array. Each element in this array is a two-element array: [key, value]
  // key is each day (like "mon" or "tue"), and
  // value is an object containing properties like temp_max, temp_min, and icon

  // .map is called on the array. It loops over each [day, value] pair in this array.
  // Destructuring: .map, [day, { temp_max, temp_min, icon }] destructures each [key, value] pair.
  // day takes the key (day name like "mon").
  //{ temp_max, temp_min, icon } destructures the value object so that you can directly access temp_max, temp_min, and icon without needing value.temp_max, value.temp_min, etc.

  // index: The index argument represents the current index of the array element in the .map loop, starting from 0.
  Array.from(dayWiseForecast).map(
    ([day, { temp_max, temp_min, icon }], index) => {
      if (index < 5) {
        dayWiseInfo += `<article class="day-wise-forecast">
            <h3 class="day">${index === 0 ? 'today' : day}</h3>
            <img class="icon" src="${createIconUrl(
              icon
            )}" alt="icon for the forecast" />
            <p class="min-temp">${formatTemperature(temp_min)}</p>
            <p class="max-temp">${formatTemperature(temp_max)}</p>
        </article>`
      }
    }
  )
  container.innerHTML = dayWiseInfo
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

function debounce(func) {
  let timer
  // The ...args: (rest parameter syntax) is used to collect all arguments passed to the
  // debounced function so they can be passed to func later. This ensures that when func
  // is finally executed after the delay, it receives the exact arguments originally passed
  // to the debounced function.
  return (...args) => {
    clearTimeout(timer) // clear existing timer

    // create a new time till the user is typing
    // timer: variable serves as a reference point, allowing you to cancel the previous timeout
    // and restart it every time debounce is called. This way, only the most recent call is
    // allowed to complete, ensuring func only runs after the specified delay with no interruptions.
    timer = setTimeout(() => {
      console.log('debounce: ')
      // func.apply(this, args):
      // Set the this context, Pass arguments as an array
      func.apply(this, args)
    }, 500)
  }
}

const onSearchChange = async (event) => {
  let { value } = event.target
  // if (!value) {
  //   selectedCity = null
  //   selectedCityText = ''
  // }
  // if (value && selectedCityText !== value) {
  const listOfCities = await getCitiesUsingGeolocation(value)
  console.log('listOfCities: ', listOfCities)
  //   let options = ''
  //   for (let { lat, lon, name, state, country } of listOfCities) {
  //     options += `<option data-city-details='${JSON.stringify({
  //       lat,
  //       lon,
  //       name,
  //     })}' value="${name}, ${state}, ${country}"></option>`
  //   }
  //   document.querySelector('#cities').innerHTML = options
  // }
}

const debounceSearch = debounce((event) => onSearchChange(event))

document.addEventListener('DOMContentLoaded', async () => {
  preventDefault()
  // console.log(await getCurrentWeatherData())

  //  loadForecastUsingGeoLocation()
  const searchInput = document.querySelector('#search')
  searchInput.addEventListener('input', debounceSearch)
  //  searchInput.addEventListener('change', handleCitySelection)

  const currentWeather = await getCurrentWeatherData()
  loadCurrentForecast(currentWeather)

  const hourlyForecast = await getHourlyForecast(currentWeather)
  loadHourlyForecast(currentWeather, hourlyForecast)

  loadFiveDayForecast(hourlyForecast)

  loadFeelsLike(currentWeather)

  loadHumidity(currentWeather)
})

// * JSON format API response example

// * const getCurrentWeatherData = async () => {
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

// ** const getHourlyForecast = async ({ name: city }) => {}
/*
[
    {
        "temp": 24.88,
        "temp_max": 24.88,
        "temp_min": 23.37,
        "dt": 1730527200,
        "dt_txt": "2024-11-02 06:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 24.25,
        "temp_max": 24.25,
        "temp_min": 23,
        "dt": 1730538000,
        "dt_txt": "2024-11-02 09:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 23.55,
        "temp_max": 23.55,
        "temp_min": 22.89,
        "dt": 1730548800,
        "dt_txt": "2024-11-02 12:00:00",
        "description": "moderate rain",
        "icon": "10d"
    },
    {
        "temp": 23.5,
        "temp_max": 23.5,
        "temp_min": 23.5,
        "dt": 1730559600,
        "dt_txt": "2024-11-02 15:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 25.22,
        "temp_max": 25.22,
        "temp_min": 25.22,
        "dt": 1730570400,
        "dt_txt": "2024-11-02 18:00:00",
        "description": "overcast clouds",
        "icon": "04d"
    },
    {
        "temp": 24.58,
        "temp_max": 24.58,
        "temp_min": 24.58,
        "dt": 1730581200,
        "dt_txt": "2024-11-02 21:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 23.3,
        "temp_max": 23.3,
        "temp_min": 23.3,
        "dt": 1730592000,
        "dt_txt": "2024-11-03 00:00:00",
        "description": "moderate rain",
        "icon": "10n"
    },
    {
        "temp": 23.23,
        "temp_max": 23.23,
        "temp_min": 23.23,
        "dt": 1730602800,
        "dt_txt": "2024-11-03 03:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 22.67,
        "temp_max": 22.67,
        "temp_min": 22.67,
        "dt": 1730613600,
        "dt_txt": "2024-11-03 06:00:00",
        "description": "moderate rain",
        "icon": "10n"
    },
    {
        "temp": 22.54,
        "temp_max": 22.54,
        "temp_min": 22.54,
        "dt": 1730624400,
        "dt_txt": "2024-11-03 09:00:00",
        "description": "moderate rain",
        "icon": "10n"
    },
    {
        "temp": 23.24,
        "temp_max": 23.24,
        "temp_min": 23.24,
        "dt": 1730635200,
        "dt_txt": "2024-11-03 12:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 24.94,
        "temp_max": 24.94,
        "temp_min": 24.94,
        "dt": 1730646000,
        "dt_txt": "2024-11-03 15:00:00",
        "description": "overcast clouds",
        "icon": "04d"
    },
    {
        "temp": 29.19,
        "temp_max": 29.19,
        "temp_min": 29.19,
        "dt": 1730656800,
        "dt_txt": "2024-11-03 18:00:00",
        "description": "overcast clouds",
        "icon": "04d"
    },
    {
        "temp": 26.63,
        "temp_max": 26.63,
        "temp_min": 26.63,
        "dt": 1730667600,
        "dt_txt": "2024-11-03 21:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 24.17,
        "temp_max": 24.17,
        "temp_min": 24.17,
        "dt": 1730678400,
        "dt_txt": "2024-11-04 00:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 24.23,
        "temp_max": 24.23,
        "temp_min": 24.23,
        "dt": 1730689200,
        "dt_txt": "2024-11-04 03:00:00",
        "description": "moderate rain",
        "icon": "10n"
    },
    {
        "temp": 23.54,
        "temp_max": 23.54,
        "temp_min": 23.54,
        "dt": 1730700000,
        "dt_txt": "2024-11-04 06:00:00",
        "description": "moderate rain",
        "icon": "10n"
    },
    {
        "temp": 22.92,
        "temp_max": 22.92,
        "temp_min": 22.92,
        "dt": 1730710800,
        "dt_txt": "2024-11-04 09:00:00",
        "description": "moderate rain",
        "icon": "10n"
    },
    {
        "temp": 23.16,
        "temp_max": 23.16,
        "temp_min": 23.16,
        "dt": 1730721600,
        "dt_txt": "2024-11-04 12:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 27.35,
        "temp_max": 27.35,
        "temp_min": 27.35,
        "dt": 1730732400,
        "dt_txt": "2024-11-04 15:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 26.33,
        "temp_max": 26.33,
        "temp_min": 26.33,
        "dt": 1730743200,
        "dt_txt": "2024-11-04 18:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 29.11,
        "temp_max": 29.11,
        "temp_min": 29.11,
        "dt": 1730754000,
        "dt_txt": "2024-11-04 21:00:00",
        "description": "broken clouds",
        "icon": "04d"
    },
    {
        "temp": 25.4,
        "temp_max": 25.4,
        "temp_min": 25.4,
        "dt": 1730764800,
        "dt_txt": "2024-11-05 00:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 24.75,
        "temp_max": 24.75,
        "temp_min": 24.75,
        "dt": 1730775600,
        "dt_txt": "2024-11-05 03:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 24.33,
        "temp_max": 24.33,
        "temp_min": 24.33,
        "dt": 1730786400,
        "dt_txt": "2024-11-05 06:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 23.57,
        "temp_max": 23.57,
        "temp_min": 23.57,
        "dt": 1730797200,
        "dt_txt": "2024-11-05 09:00:00",
        "description": "light rain",
        "icon": "10n"
    },
    {
        "temp": 23.95,
        "temp_max": 23.95,
        "temp_min": 23.95,
        "dt": 1730808000,
        "dt_txt": "2024-11-05 12:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 29.56,
        "temp_max": 29.56,
        "temp_min": 29.56,
        "dt": 1730818800,
        "dt_txt": "2024-11-05 15:00:00",
        "description": "overcast clouds",
        "icon": "04d"
    },
    {
        "temp": 31.06,
        "temp_max": 31.06,
        "temp_min": 31.06,
        "dt": 1730829600,
        "dt_txt": "2024-11-05 18:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 29.46,
        "temp_max": 29.46,
        "temp_min": 29.46,
        "dt": 1730840400,
        "dt_txt": "2024-11-05 21:00:00",
        "description": "light rain",
        "icon": "10d"
    },
    {
        "temp": 25.75,
        "temp_max": 25.75,
        "temp_min": 25.75,
        "dt": 1730851200,
        "dt_txt": "2024-11-06 00:00:00",
        "description": "scattered clouds",
        "icon": "03n"
    },
    {
        "temp": 25.38,
        "temp_max": 25.38,
        "temp_min": 25.38,
        "dt": 1730862000,
        "dt_txt": "2024-11-06 03:00:00",
        "description": "overcast clouds",
        "icon": "04n"
    },
    {
        "temp": 25.06,
        "temp_max": 25.06,
        "temp_min": 25.06,
        "dt": 1730872800,
        "dt_txt": "2024-11-06 06:00:00",
        "description": "overcast clouds",
        "icon": "04n"
    },
    {
        "temp": 25.02,
        "temp_max": 25.02,
        "temp_min": 25.02,
        "dt": 1730883600,
        "dt_txt": "2024-11-06 09:00:00",
        "description": "broken clouds",
        "icon": "04n"
    },
    {
        "temp": 25.98,
        "temp_max": 25.98,
        "temp_min": 25.98,
        "dt": 1730894400,
        "dt_txt": "2024-11-06 12:00:00",
        "description": "broken clouds",
        "icon": "04d"
    },
    {
        "temp": 30.73,
        "temp_max": 30.73,
        "temp_min": 30.73,
        "dt": 1730905200,
        "dt_txt": "2024-11-06 15:00:00",
        "description": "scattered clouds",
        "icon": "03d"
    },
    {
        "temp": 31.7,
        "temp_max": 31.7,
        "temp_min": 31.7,
        "dt": 1730916000,
        "dt_txt": "2024-11-06 18:00:00",
        "description": "scattered clouds",
        "icon": "03d"
    },
    {
        "temp": 28.87,
        "temp_max": 28.87,
        "temp_min": 28.87,
        "dt": 1730926800,
        "dt_txt": "2024-11-06 21:00:00",
        "description": "broken clouds",
        "icon": "04d"
    },
    {
        "temp": 26.49,
        "temp_max": 26.49,
        "temp_min": 26.49,
        "dt": 1730937600,
        "dt_txt": "2024-11-07 00:00:00",
        "description": "broken clouds",
        "icon": "04n"
    },
    {
        "temp": 25.98,
        "temp_max": 25.98,
        "temp_min": 25.98,
        "dt": 1730948400,
        "dt_txt": "2024-11-07 03:00:00",
        "description": "light rain",
        "icon": "10n"
    }
]
*/
