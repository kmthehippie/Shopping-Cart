import React from 'react'
import Products from '../FetchData'
import { useParams } from 'react-router-dom'


function ProductDetail() {
  const data = [...Products()]
  const { productId } = useParams()
  const idData = data.filter(checkId)
  function checkId(data){    
    return dasdata.id === Number(productId)
  }

  return (
    <div>
      Product Detail
      { JSON.stringify(idData) }
      <div className="prod-img-div">
        <img src={idData.image} />
      </div>
      <div className="prod-desc">
        <h2>{idData.title}</h2>
        <p><i>{idData.price}</i></p>
        <button>Add To Cart</button>
      </div>
      <div className="accordion">
        <Accordion description={idData.description} />
      </div>
    </div>
  )
}

export default ProductDetail