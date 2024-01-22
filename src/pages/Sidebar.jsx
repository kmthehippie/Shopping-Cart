import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import axios from "axios"

export default function Sidebar() {
    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async ()=>{
            const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setData(resp.data)
        }
        getData()
    }, [])

  return (
    <div className='sidebar'>
        <NavLink to="/">All Fruits</NavLink>
        <p>{JSON.stringify(data)}</p>
    </div>
  )
}



// export const findData = async ({request}) => {
//     const data = await request.formData();
//     const res = await fetch("https://www.fruityvice.com/api/fruit/all")
//     if (!res.ok){
//         throw Error ("can't reach data")
//     }
//     return(res.json())
// }