import React from 'react'
import './App.css'
import { css } from '@emotion/react'

const button = css`
padding: 8px;
  color: #f707ff;
`

const primary = css`
  background-color: royalblue;
  color: white;
`

const App = () => {
  return (
    <>
      <h1>Contacts App</h1>
      <button>Add Contact</button>
    </>
  )
}

export default App
