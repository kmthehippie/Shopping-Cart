import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../styles/rootlayout.scss"
import CartModal from '../shopping-cart/CartModal'
import CartProvider from '../CartProvider'


function RootLayout() {
  return (
    <>
    
      <div className="whole-body">
      <CartProvider>
        <div className='navigation'>
        <nav>       
        <NavLink to="/" className={"head-logo"}><h1>D.rop</h1></NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/app/products">Products</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
        <CartModal />
        </nav>
        </div>
        <main>
        <Outlet />
        </main>
      </CartProvider>
      </div>

   </>
  )
}

export default RootLayout