// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Layout } from './App.jsx'
import { loadContacts } from './loader.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} loader={loadContacts}>
        <Route
          path='/contacts/:contactId'
          element={
            <>
              <h1>contacts</h1>
            </>
          }
        />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  <RouterProvider router={router} />
  // </StrictMode>,
)
