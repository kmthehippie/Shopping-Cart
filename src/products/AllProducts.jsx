import React from 'react'
import Products from "../FetchData"
import CardLayout from '../layouts/CardLayout'
import "../styles/cardlayout.scss"


function AllProducts() {

  const data = Products()
  return (
    <div className="cards">
    {   
      data.map(item=> 
      <CardLayout props={item} />)
    }
    </div>
  )
}

export default AllProducts