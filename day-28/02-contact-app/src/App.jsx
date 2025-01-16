import React from 'react'
import './App.css'
import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'
import ContactList from './ContactList'

// https://randomuser.me/api/?result=50 , https://randomuser.me/api/?result=50&*seed=3185faa6e33ca218
function Sidenav() {
  return (
    <aside
      css={css`
        padding: 16px;
        border-right: 1px solid;
        display: grid;
        grid-template-rows: auto 1fr auto;
      `}
    >
      <header
        css={css`
          border-bottom: 1px solid;
          padding: 16px;
        `}
      >
        <form
          css={css`
            display: flex;
            justify-content: space-between;
          `}
          action=''
        >
          <input type='text' />
          <button>Search</button>
        </form>
      </header>
      <section
        css={css`
          padding: 16px;
        `}
      >
        <ContactList />
      </section>
      <footer
        css={css`
          border-top: 1px solid;
          padding: 16px;
        `}
      >
        footer
      </footer>
    </aside>
  )
}

function Contents() {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export const Layout = () => {
  return (
    <>
      <main
        css={css`
          display: grid;
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 100%;
        `}
      >
        <Sidenav />
        <Contents />
      </main>
    </>
  )
}
