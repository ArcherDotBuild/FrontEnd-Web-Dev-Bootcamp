import { ACCESS_TOKEN, EXPIRES_IN, TOKEN_TYPE, logout } from '../common'

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL

const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)
  const expiresIn = localStorage.getItem(EXPIRES_IN)
  const tokenType = localStorage.getItem(TOKEN_TYPE)
  if (Date.now(0 < expiresIn)) {
    return { accessToken, tokenType }
  } else {
    logout()
  }
}

const createAPIConfig = ({ accessToken, tokenType }) => {
  return {
    headers: {
      Autorization: `${tokenType} ${accessToken}`,
    },
    method: 'a',
  }
}

export const fetchRequest = async (endpoint) => {
  const url = `${BASE_API_URL}/${endpoint}`
  const result = await fetch(url, createAPIConfig(getAccessToken()))
  return result.json()
}
