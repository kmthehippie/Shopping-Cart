import React from 'react'
import Products from '../FetchData'
import DisplayCats from './DisplayCats'

function DisplayProducts(prop) {

const cat = prop.prop
const data = Products()

const name = (cat) => {
 
  let text = cat;
  
  if (text !== undefined){
    let final = ""
    text.split(" ").forEach(word => {
      final += " " + word[0].toUpperCase() + word.substring(1)
    })
    return final
  }
}


  return (
    <>
    <h1> {name(cat)} </h1>
    <DisplayCats cat = {cat} data = {data} />
    </>
    
  )
}

export default DisplayProducts