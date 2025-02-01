// import 'App.css'
// import Button from '@mui/material/Button'

import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import { Provider } from 'react-redux'
import { store } from '../store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
