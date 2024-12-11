import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)
      // If the (value) is there => parse the (value), if not just return the (initialValue)
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // Mechanism by which we can set the value in the localStorage
  const setValue = (value) => {
    setLocalStorageValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }
  return [localStorageValue, setValue]
}

export default useLocalStorage
