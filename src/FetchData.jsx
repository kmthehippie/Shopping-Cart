import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export default function Products() {
    const [ data, setData ] = useState([])
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((resp)=>resp.json())
      .then ((resp)=>setData(resp))
      .catch ((error)=>console.error(error))
    }, [])
    
    const products = data.map( item => <li> { JSON.stringify(item)} </li>)
    const categories = [...new Set (data.map( item => item.category))]
    const category =  categories.map(category =>
      <li><NavLink to={category.split(' ')[0].replace("'s", "")}>{category}</NavLink></li>
      )

    return data
}

