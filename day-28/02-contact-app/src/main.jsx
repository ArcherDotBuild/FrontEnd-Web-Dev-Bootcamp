// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Layout } from './App.jsx'
import { loadContacts, loadContact } from './loader.js'
import Contact from './Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} loader={loadContacts}>
        <Route
        // params object available in the URL path
          path='/contacts/:contactId' loader={({params}) => loadContact(params.contactId)}
          element={
            <Contact />
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
