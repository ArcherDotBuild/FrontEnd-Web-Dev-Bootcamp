import { fetchRequest } from '../api'
import { ENDPOINT } from '../../common'

const loadUserProfile = async () => {
  const defaultImage = document.querySelector('#default-image')
  const profileButton = document.querySelector('#user-profile-btn')
  const displayNameElement = document.querySelector('#display-name')

  const userInfo = await fetchRequest(ENDPOINT.userInfo)
  console.log(userInfo);
}

document.addEventListener('DOMContentLoaded', () => {
  loadUserProfile()
})
