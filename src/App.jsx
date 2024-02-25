import { createBrowserRouter,
RouterProvider } from 'react-router-dom'


//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductCart from './pages/ProductCart'
import ErrorPage from './pages/ErrorPage'

//products-filtered pages
import ProductDetail from './products/ProductDetail'
import DisplayProducts from './products/DisplayProducts'

//cart modal
import CartModal from './shopping-cart/CartModal'

//layouts
import RootLayout from './layouts/RootLayout'
import ProductLayout from './layouts/ProductLayout'




const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorPage />,
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
      path: "app",
      element: <ProductCart />,
      children: [
        {
          path: "cart",
          element: <CartModal />
        },
        {
          path: "products",
          element: <ProductLayout />,
          children: [
            {
              index: true,
              element: <DisplayProducts  />,
            },
            {
              path: "product/:productId",
              element: <ProductDetail />
            },
            
          ],
          //loader?
          // errorElement: <></>,
        },
        
        
      ]
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
