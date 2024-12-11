import React from 'react'
import useLocalStorage from './useLocalStorage'

const Header = () => {
  const [username] = useLocalStorage('username', '')
  return <header>{username}</header>
}

export default Header
