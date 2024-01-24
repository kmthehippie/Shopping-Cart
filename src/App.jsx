import { createBrowserRouter,
RouterProvider } from 'react-router-dom'

import './App.css'



//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Men from "./products/Men"
import Jewelery from "./products/Jewelery"
import Electronics from "./products/Electronics"
import Women from "./products/Women"
import ProductDetail from './products/ProductDetail'


//layouts
import RootLayout from './layouts/RootLayout'
import ProductLayout from './layouts/ProductLayout'
import AllProducts from './products/AllProducts'



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
      children: [
        {
          index: true,
          element: <AllProducts />
        },
        {
          path: "men",
          element: <Men />
        },
        {
          path: "women",
          element: <Women />,
        },
        {
          path: "jewelery",
          element: <Jewelery />
        },
        {
          path: "electronics",
          element: <Electronics />
        },
        {
          path: "product/:productId",
          element: <ProductDetail />
        }
      ],
      //loader?
      // errorElement: <></>,
    },
    
  ]
},
])
function App() {
  

  return (
   <RouterProvider router = {router} />
  )
}

export default App
