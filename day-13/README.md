![image info](./welcome-day-13.png)

# Welcome to Day 13

## **Weather App**

## Resources:

- Current weather: https://openweathermap.org/current
- 5 day forecast: https://openweathermap.org/forecast5
- Icons: https://openweathermap.org/weather-conditions#How-to-get-icon-URL

### Extra resources:

- JSON sucks. But we're making it better: https://jsonhero.io/

### Roadmap

- 1:
- 2:
- 3:
- 4:
- 5:

#### 1. Git commands

After running git add ., use this command to see which files are staged:

- View Staged Files Before Committing: `git status`

Alternatively, you can list the staged files (without showing the diff) using:

- List All Staged Files: `git diff --name-only --cached`

This command shows a list of files changed in the most recent commit:

- View the Files in the Last Commit: `git show --name-only`

This option keeps your changes in the staging area, allowing you to re-commit them if needed:

- Undo the Last Commit but Keep the Changes Staged: `git reset --soft HEAD~1`

Undo the Last Commit and Unstage the Changes

- Undo the Last Commit and Unstage the ChangesL: `git reset --mixed HEAD~1`

If .env is already being tracked, .gitignore won’t stop it from being committed. You’ll need to untrack it by running:

- Remove file from Tracking (if it was previously added): `git rm --cached ./path/to/.env`

The standard name for environment files is typically:

- `.env`
- `.env.development`
- `.env.production`
- `.env.test`

#### 2. Weather App JSON - JSON format API response example

```json
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
```
