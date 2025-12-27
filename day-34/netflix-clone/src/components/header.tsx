import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const header = () => {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <footer>

    </footer>
    </>
  )
}

export default header