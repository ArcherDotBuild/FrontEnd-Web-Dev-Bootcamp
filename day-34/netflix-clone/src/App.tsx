import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <h1>default view</h1>
          }
        />
        <Route path="/login" element={<h1>login</h1>} />,
        <Route path="/browse" element={<h1>browse</h1>}>
          <Route index element={} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default function App() {
  return <AppRouter />;
}

// 23m
