import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../products/Sidebar'
import "../styles/productlayout.scss"
import DisplayProducts from '../products/DisplayProducts'

export default function ProductLayout() {


  const [display, setDisplay] = useState("all")

  const handleSetDisplay = (e, filter) => {
    const allBtns = e.target.parentNode.children
    Array.from(allBtns).forEach(
      btn => {
        btn.classList.remove("active")
      }
    )
    e.target.className = "active"
    setDisplay(filter)
  }

  return (

    <div className = "product-body">
      <Sidebar handleSetDisplay = {handleSetDisplay}/>
      <div className="product-listing">    
        <Outlet />
       {/*Previously: Outlet  */}
       <DisplayProducts prop = { display } />
      </div>
    </div>  
)
}

