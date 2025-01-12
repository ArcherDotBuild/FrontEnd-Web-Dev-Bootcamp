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
      <h1>CSS in JS using emotion</h1>
      <div
        css={css({
          backgroundColor: 'red',
          color: 'white',
          '&:hover': {
            backgroundColor: 'royalblue',
            cursor: 'pointer',
          },
        })}
      >
        <h1>Testing 01</h1>
      </div>
      <section
        css={css`
          display: grid;
          grid-template-rows: auto 200px;
        `}
      >
        <h1>this is a section</h1>
        <p>this is a paragraph</p>
      </section>
      <div>
        <button css={button}>Primary</button>
        <a css={primary} href=''>
          This is a link
        </a>
      </div>
    </>
  )
}

export default App
