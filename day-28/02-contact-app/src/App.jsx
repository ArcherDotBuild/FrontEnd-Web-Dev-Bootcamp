import React, { useRef, useState } from 'react'
import './App.css'
import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'
import ContactList from './ContactList'

// 128 minuto

// https://randomuser.me/api/?results=50
// https://randomuser.me/api/?results=50&seed=4c8f9ad7f97ac8ff
// https://randomuser.me/api/?results=50&seed=4c8f9ad7f97ac8ff&inc=name,email,id,picture,cell
// https://randomuser.me/api/?results=50&seed=6f0145f2e462e8a6&inc=name,email,id,picture,cell&nat=IN

function Header({ onSearch }) {
  const searchElementRef = useRef(null)

  function onSubmit(e) {
    e.preventDefault()
    onSearch(searchElementRef.current.value)
  }

  return (
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
        onSubmit={onSubmit}
      >
        <input
          ref={searchElementRef}
          css={css`
            padding: 8px;
          `}
          type='text'
        />
        <button>Search</button>
      </form>
    </header>
  )
}

function Sidenav() {
  const [searchText, setSearchText] = useState('')

  function onSearch(text) {
    setSearchText(text)
  }
  return (
    <aside
      css={css`
        padding: 16px;
        border-right: 1px solid;
        display: grid;
        grid-template-rows: auto 1fr auto;
      `}
    >
      <Header onSearch={onSearch} />
      <section
        css={css`
          padding: 16px;
          height: 500px;
          overflow: auto;
        `}
      >
        <ContactList searchText={searchText} />
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
