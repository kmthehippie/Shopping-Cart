import React from 'react'
import "../styles/home.scss"
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
    <div className="hero-bg">
       <img src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg"></img>
         <div className="shop-now-div">
            <NavLink to="/app/products" className="shop-btn">Shop</NavLink>
    </div>
    </div>
    <div className="footer">
      <p>Photo by <a href=" https://www.pexels.com/photo/iphone-6-on-black-table-3568518/">Drew Williams</a></p>
    </div>
   
        
       
   
    </>
  )
}

export default Home