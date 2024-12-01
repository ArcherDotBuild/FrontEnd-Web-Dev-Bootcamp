![image info](./welcome-day-18.png)

# Welcome to Day 19

## **Spotify Clone Part 2**

## Resources:

- User Auth: https://developer.spotify.com/documentation/web-api/%20User%20Auth
- implicit-grant: https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/%20App%20Settings
- app-settings: https://developer.spotify.com/documentation/general/guides/authorization/app-settings/
- TailwindCSS Installation: https://tailwindcss.com/docs/installation/using-postcss
- Tailwind Intellisense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
- Tailwind Class sorter: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted
- - Spotify Console: https://developer.spotify.com/console/

### Extra resources:

- heroicons: https://heroicons.com

### Roadmap

- 1: Spotify redirect settings
- 2: Implicit Grant Flow

#### 1. Spotify redirect settings

Redirect URIs: `http://localhost:3000/login/login.html`

#### 2. Implicit Grant Flow

The following JavaScript sample builds the authorization request:

```javascript
var client_id = 'CLIENT_ID'
var redirect_uri = 'http://localhost:8888/callback'

var state = generateRandomString(16)

localStorage.setItem(stateKey, state)
var scope = 'user-read-private user-read-email'

var url = 'https://accounts.spotify.com/authorize'
url += '?response_type=token'
url += '&client_id=' + encodeURIComponent(client_id)
url += '&scope=' + encodeURIComponent(scope)
url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
url += '&state=' + encodeURIComponent(state)
```
