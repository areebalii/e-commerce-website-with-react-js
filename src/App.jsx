import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layout/AppLayout'
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Products } from "./Components/Products"
import { Contact } from "./Components/Contact"
import { Cart } from "./Components/Cart"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])

  return (
  <RouterProvider router={router}>


  </RouterProvider>
  )
}

export default App
