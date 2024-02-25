import React from 'react'
import Currency from '../helpers/Currency'
import useQuantity from '../helpers/Quantity'
import AddToCart from '../helpers/AddToCart'
import "../styles/singleproductmodal.scss"

function SingleProduct(props) {
    const item = props.props
    const { quantity, render } = useQuantity(item)
    let newProp = item
    newProp.quantity = quantity
    const handleHide = (e) => {
      console.log(e.target.parentNode)
      const prodModal = e.target.parentNode.parentNode
      prodModal.classList.add("hide")
      console.log(prodModal)
      
    }

  return (
    <div className='prod-modal '>
      
      <div className="inside-modal">
      <button onClick = { (e)=> handleHide(e) } id="close">X</button>
      <h1> {item.title}</h1>
      <div className="modal-container">
      <div className="left-prod">
        
        <div className="prod-img-div">
        <img src={item.image} />
        </div>
      </div>
      <div className="right-prod">
        <div className="prod-desc">
        <h4>{item.description}</h4>
        <p><i>{Currency(item.price)}</i></p>
        </div>
        {render}
        <AddToCart props = {newProp} />
      </div>
      </div>
      

      </div>
      
    </div>

  )
}

export default SingleProduct