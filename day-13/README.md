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

- 1: Weather App JSON - JSON format API response example
- 2: debounce
- 3:
- 4:
- 5:

#### Git commands

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

#### 1. Weather App JSON - JSON format API response example

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

#### 2. debounce

The `debounce` function is a commonly used technique to limit how often a function can execute in response to events, such as typing. Here’s a detailed explanation of what it does:

```javascript
function debounce(func) {
  let timer
  return (...args) => {
    clearTimeout(timer) // Clear any previous timer

    // Set a new timer that calls `func` after 500ms
    timer = setTimeout(() => {
      console.log('debounce: ')
      func.apply(this, args) // Call the original function `func` with the provided arguments
    }, 500)
  }
}
```

**What `debounce` Does**

1. **Delays Execution:**

- `debounce` will delay the execution of the function func until a specified amount of time (500ms here) has passed since the last time the function was invoked.

2. **Returns a New Function:**

- `debounce` returns a new function that, when called, sets a timer. If that new function is called again before the timer completes, the previous timer is cleared, and a new one is started.

3. **Limits Function Calls:**

- This way, `func` will only execute after there’s been a pause (500ms here) in activity, such as typing. This is especially useful for events that might trigger many times in quick succession, like `input` events on a text field.

**Explanation of Each Line**

- `return (...args) => { ... }`:
  - Returns a new function that accepts any arguments (...args). Each time this returned function is called, it resets the timer.
- `clearTimeout(timer)`:
  - Cancels any existing timer. This means if the user types again within the 500ms period, the previous timer won’t execute.
- `timer = setTimeout(() => { ... }, 500)`:
  - Sets a new timer to execute `func` after 500ms. If no other calls to the debounced function occur within this time, `func` will execute.
- `func.apply(this, args)`:
  - Calls the original function `func` with the provided arguments (`args`) and retains the current context (`this`).

**Example Use Case**
If you attach this debounced function to an `input` field’s `oninput` event, it will wait until the user has stopped typing for 500ms before calling the function. This reduces the number of times the function is called, such as when performing an API search with each keystroke.

**Quick Summary**
This `debounce` function:

- Limits how often `func` can be called by delaying execution until after a specified wait time (500ms).
- Resets the timer every time the returned function is called within the delay, ensuring `func` only runs when activity pauses.

1. **Why Return Another Function?**
   The debounce function needs to return another function because this returned function is what will handle the repeated events. The **outer function (`debounce`) creates the timer variable and returns a new function** that uses that timer variable to control how often `func` is called.

Here's why it’s necessary:

- When `debounce(func)` is called, it returns a "debounced" version of `func` — a version that doesn’t call `func` immediately but waits.
- Every time this debounced function is called, it either resets the timer (if a previous one exists) or starts a new one.
- This returned function has access to the `timer` variable in the outer scope, allowing it to reset it every time.

2. **Why `...args` in the Returned Function?**
   The `...args` (rest parameter syntax) is used to **collect all arguments passed to the debounced** function so they can be passed to `func` later. This ensures that when `func` is finally executed after the delay, it receives the exact arguments originally passed to the debounced function.

Example: If func requires arguments, like debouncedFunction(1, 2), ...args will capture these arguments ([1, 2]). Then, func.apply(this, args) will pass them to func.

3. **Why `func.apply(this, args)`?**
   The `.apply` method lets you:

- **Set the** `this` **context:** `apply(this, args)` ensures that `func` is called with the same `this` value as in the debounced function’s context.
- **Pass arguments as an array:** `apply` is a way to call a function with arguments from an array. Here, `args` contains the original arguments collected by `...args`.
  If we had used `func(args)`, `args` would be passed as a single array argument, which wouldn’t work if `func` expects separate parameters.

The `timer` variable is declared outside the returned function to create a persistent reference across multiple calls. This allows each call to access and clear the previous timer, preventing multiple timeouts from stacking up. If `timer` were inside the returned function, each call would have its own separate `timer`, making it impossible to cancel the previous one.
