import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../styles/rootlayout.scss"

function RootLayout() {
  return (
    <div className="header">
        <nav>
        <h1>Fruits Are Us</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
        {/* Need to add shopping cart logo later */}
        <NavLink to="/">Shopping Cart</NavLink>
        </nav>
        <main>
        <Outlet />
        </main>
    </div>
  )
}

export default RootLayout