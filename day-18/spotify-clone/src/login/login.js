//** NOTHING OF THIS WORKED! */
// require('dotenv').config()

// import dotenv from 'dotenv'
// dotenv.config()

// console.log(import.meta.env.VITE_APIKEY)

// let apikey = process.env.apikey

// ! END
//** END NOTHING OF THIS WORKED! */

const scopes =
  'user-top-read user-follow-read playlist-read-private user-library-read'
var REDIRECT_URI = 'http://localhost:3000/login/login.html'
const ACCESS_TOKEN_KEY = 'accessToken'
const APP_URL = 'http://localhost:3000'

const authorizeUser = () => {
  const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${scopes}&show_dialog=true`
  window.open(url, 'login', 'width=800,height=600')
}

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('login-to-spotify')
  loginButton.addEventListener('click', authorizeUser)
})

window.setItemsInLocalStorage = ({ accessToken, tokenType, expiresIn }) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('tokenType', tokenType)
  localStorage.setItem('expiresIn', expiresIn)
  window.location.href = APP_URL
}

window.addEventListener('load', () => {
 const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
 if (accessToken) {
   window.location.href = `${APP_URL}/dashboard/dashboard.html`
 }
  if (window.opener !== null && !window.opener.closed) {
    window.focus()
    if (window.location.href.includes('error')) {
      window.close()
    }

    // console.log(window.location.hash)

    const { hash } = window.location
    // console.log('inside the popup');
    const searchParams = new URLSearchParams(hash)
    const accessToken = searchParams.get('#access_token')

    const tokenType = searchParams.get('token_type')
    const expiresIn = searchParams.get('expires_in')

    if (accessToken) {
      window.close()
      window.opener.setItemsInLocalStorage({
        accessToken,
        tokenType,
        expiresIn,
      })
      window.location.href = APP_URL
    } else {
      window.close()
    }
  }
})
