import React from 'react'
import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'




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
  

  return {
    quantity,
    render: (
      <div className="quantity">
      <div onClick={(e) => handleMinus(e)} >-</div>
      <div className="display-quant">{quantity} </div>
      <div onClick={(e) => handlePlus(e)}>+</div>
     </div>
     
  
    )
  }
    
}

export default useQuantity