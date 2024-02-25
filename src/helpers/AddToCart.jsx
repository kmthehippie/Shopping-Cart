import React from 'react'
import { useCartContext } from '../CartContext'



function AddToCart(props) {

  const prop = props.props
  const { updateCartArr } = useCartContext()


  const sendInfoToContext = () => {
    updateCartArr(prop)
  }

  return (
    <button onClick = {(e)=> sendInfoToContext(e)}className="add-to-cart">Add To Cart</button>
  )
}

export default AddToCart