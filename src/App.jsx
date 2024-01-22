import { createBrowserRouter,
RouterProvider } from 'react-router-dom'

import './App.css'



//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import { loader as fruitsLoader } from './pages/Sidebar'

//layouts
import RootLayout from './layouts/RootLayout'
import ProductLayout from './layouts/ProductLayout'

const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "products",
      element: <ProductLayout />,
      // errorElement: <></>,
    }
  ]
},
])
function App() {
  

  return (
   <RouterProvider router = {router} />
  )
}

export default App
