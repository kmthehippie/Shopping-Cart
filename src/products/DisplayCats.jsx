import React from 'react'
import Products from "../FetchData"
import CardLayout from '../layouts/CardLayout'

function DisplayCats(props) {
    const data = Products()
    const cat = props.props
    const catsData = data.filter(checkCategory)

    function checkCategory(data) {
        return data.category === cat
    }


  return (
    <>
        <h2>{props.category}</h2>
        <div className="cards">
        {
            catsData.map(item=> 
                <CardLayout props={item} />)
        }
        </div>
    </>
  )
}

export default DisplayCats