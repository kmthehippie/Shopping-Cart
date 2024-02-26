import React from 'react'
import "../styles/home.scss"
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
    <div className="hero-bg">
       <img src="src/assets/bg.jpg"></img>
         <div className="shop-now-div">
            <NavLink to="/app/products" className="shop-btn">Shop</NavLink>
    </div>
    </div>
    <div className="footer">
      <p>Photo by <a href=" https://www.pexels.com/photo/man-wearing-black-headset-3345882/">Ola Dapo</a></p>
    </div>
   
        
       
   
    </>
  )
}

export default Home