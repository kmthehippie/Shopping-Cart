import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../styles/sidebar.scss"

function Sidebar() {
  

  return (
    <>
    <div className="side-bar">
    <NavLink to="">All</NavLink>
    <NavLink to="men">Men's Wear</NavLink>
    <NavLink to="women">Women's Wear</NavLink>
    <NavLink to="jewelery">Jewelery</NavLink>
    <NavLink to="electronics">Electronics</NavLink>    
    </div>
    
    </>
  )
}

export default Sidebar

