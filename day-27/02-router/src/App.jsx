import { useState } from 'react'
import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Dashboard />}/>
//       < path='/about' element={<About />}/>
//       < path='/home' element={<Home />}/>
//     </Routes>
//   )
// }

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className='layout'>
      <header className='header'>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>this is the footer</footer>
    </div>
  )
}

function Dashboard() {
  return <h1>Dashboard Component</h1>
}

function About() {
  return <h1>About Component</h1>
}

function Home() {
  return <h1>Home Component</h1>
}

export default App