// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/contact' element={<><h1>contacts</h1></>} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  <RouterProvider router={router} />
  // </StrictMode>,
)
