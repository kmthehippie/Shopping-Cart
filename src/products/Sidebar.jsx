import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../styles/sidebar.scss"

function Sidebar(prop) {
  
  const { handleSetDisplay } = prop

  return (
    <>
    <div className="side-bar">  
    <button onClick={(e)=>{handleSetDisplay(e, "all")}}>All</button>
    <button onClick={(e)=>{handleSetDisplay(e, "men's clothing")}}>Men's Wear</button>
    <button onClick={(e)=>{handleSetDisplay(e, "women's clothing")}}>Women's Wear</button>
    <button onClick={(e)=>{handleSetDisplay(e, "jewelery")}}>Jewelery</button>
    <button onClick={(e)=>{handleSetDisplay(e, "electronics")}}>Electronics</button>
    </div>
    
    </>
  )
}

export default Sidebar

