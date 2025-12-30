import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './components/layout'
import Browse from './pages/browse'

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold underline">default view</h1>
          }
        />
        <Route path="/login" element={<h1>login</h1>} />,
        <Route path="/browse" element={<Layout />}>
          <Route index element={<Browse />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default function App() {
  return <AppRouter />
}

// 23m
