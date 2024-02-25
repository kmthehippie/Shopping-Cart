import React, { useState } from 'react'
import Products from '../FetchData'
import { useParams } from 'react-router-dom'
import "../styles/productdetail.scss"
import SingleProduct from './SingleProduct'


function ProductDetail() {
  const params = useParams()
  const id = params.productId
  const data = Products()
  function checkId(data){    
    return data.id === Number(id)
  }

  
  return (
    <>
    <div className='single-product'>
    {
      data.filter(checkId).map(item =>
        
        <SingleProduct props={item} key={item.id}/>
        )
    }

    </div>
    </>
    

  )

}

export default ProductDetail