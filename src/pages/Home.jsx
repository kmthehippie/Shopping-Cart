import React from 'react'
import "../styles/home.scss"
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
    <div className="hero-bg">
        <div className="mini-box">
        <div className="title">
            <h1>Welcome to <br/>
                Fruits are Us</h1>
        </div>
        <div className="shop-now-div">
            <NavLink to="/" className="shop-btn">Shop Now!</NavLink>
        </div>
        </div>
        
    </div>
    <div className="reviews">
        
    </div>
    </>
  )
}

export default Home