import React from 'react'
import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import "../styles/quantity.scss"



function useQuantity(prop) {

  const availableStock = prop.rating.count
    const [quantity, setQuantity] = useState(0)
 
    const handleMinus = function(){
      let qtt = quantity
      qtt <= 0 ? qtt = 0 : qtt--
      return setQuantity(qtt)
    
    }
    const handlePlus = function(){
      let qtt = quantity
      qtt >= availableStock ? qtt = availableStock : qtt++
      return setQuantity(qtt)
    }
    const handleChange = (e)=>{
      const newQuantity = parseInt(e.target.value, 10); // Parse input value as integer
    if (!isNaN(newQuantity)) { // Check if input value is a valid number
      setQuantity(Math.min(availableStock, Math.max(0, newQuantity))); // Ensure quantity is within range
    }
    }

  return {
    quantity,
    render: (
      <div className="quantity">
      <div onClick={(e) => handleMinus(e)} >-</div>
      <input className="display-quant" type="text" name="quantity" value={quantity} onChange={(e)=>{handleChange(e)}}></input>
      <div onClick={(e) => handlePlus(e)}>+</div>
     </div>
     
  
    )
  }
    
}

export default useQuantity