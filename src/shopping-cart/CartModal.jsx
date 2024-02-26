
import React from 'react'
import { useState } from 'react'
import "../styles/cartmodal.scss"
import { useCartContext } from '../CartContext'
import Currency from '../helpers/Currency'
import { Link } from 'react-router-dom'

function CartModal() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    let current = isOpen
    current === true ? setIsOpen(false) : setIsOpen(true)
  }
  

  const { cartCount, removeItem, adjustQuantity, cartEmpty, cartTotal, cartArr,updateCartArr} = useCartContext()

  const ifCartEmpty = (cartEmpty) => {
    if(cartEmpty) {
      return (
        <>
      <p>"Your Cart is Empty"</p>
      <Link to="/app/products" onClick={toggleModal}>Click here to shop</Link>
      </>
      )
      
    } else {
      return 
    }
   
  }
  return (
  <div className="cart">
    <button onClick={toggleModal} id="cart-button"><span className="material-symbols-outlined">
    shopping_cart
    </span></button>
    <div className="count" onClick={toggleModal}><p >{cartCount}</p></div>
   
    {isOpen &&  (
      <div className="cart-bg">
        <div className='cart-modal'>
          <button onClick = { (e)=> toggleModal(e) } id="close">X</button>
          <h1> Your Cart </h1>
        {ifCartEmpty(cartEmpty)}
          {!cartEmpty && (<table>
            <thead>
            <tr>
              <th id="item-name">Item Name</th>
              <th>Item Price</th>
              <th id="item-quantity">Item Quantity</th>
              <th>Item Total</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
            cartArr.map( i => 
            
              <tr key = {i.id} id={i.id}>
              <td>{i.title}</td>
              <td>{Currency(i.price)}</td>
              <td><button onClick={()=> updateCartArr(i, -1)} id="qtt">-</button>{i.quantity}<button onClick={()=> updateCartArr(i, 1)}  id="qtt">+</button></td>
              <td>{Currency(i.price * i.quantity)}</td>
              <td><button onClick={()=>removeItem(i.id)}>-</button></td>
              </tr>
              )
              
            }
            </tbody>
            <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{Currency(cartTotal)}</td>
            </tr>
            </tfoot>
          </table>)}
          
          <button id="checkout">Go To Checkout</button>
          {/* <div className="items">
          {cartArr.map( i => 
          <>{JSON.stringify(i)}
          <div className="item-name">{i[0].title}</div>
          <div className="item-price">{i.item.price}</div>
          <div className="item-quantity">{i.quantity}</div>
          <div className="item-end-price">{i.item.price * i.quantity}</div>
          </>)}
          </div>

          <div className="total">
            {total}
          </div> */}

        </div>
        
    </div>
    )}
</div>
  )
    
    
      
    
    
  
    

}

export default CartModal