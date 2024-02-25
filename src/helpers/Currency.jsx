import React from 'react'

function Currency(num) {
    let USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
  return (
    <>
   { USD.format(num) }
    </>
  )
}

export default Currency