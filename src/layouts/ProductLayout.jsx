import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../products/Sidebar'
import "../styles/productlayout.scss"
import AllProducts from '../products/AllProducts'

export default function ProductLayout() {
  
  return (
    <>
    <div className = "product-body">

      <Sidebar />
      <div className="product-listing">
      <Outlet />
      </div>
{/* Sidebar first */}
{/* products layout. multiple in one page. */}
    </div>  
    </>
)
}

