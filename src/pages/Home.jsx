import React from 'react'
import "../styles/home.scss"
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
    <div className="hero-bg">
       <img src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
         <div className="shop-now-div">
            <NavLink to="/app/products" className="shop-btn">Shop</NavLink>
    </div>
    </div>
   
        
       
   
    </>
  )
}

export default Home