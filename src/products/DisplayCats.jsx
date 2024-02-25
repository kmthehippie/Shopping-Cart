import React from 'react'
import Products from "../FetchData"
import CardLayout from '../layouts/CardLayout'

function DisplayCats(props) {
    const data = props.data
    const cat = props.cat

    const catsData = data.filter(checkCategory)

    function checkCategory(data) {
        if(cat === "all"){
                return data
          }
        return data.category === cat
    }


  return (
    <>

        <div className="cards">
        {
            catsData.map(item=> 
                <CardLayout props={item} key={item.id}/>)
        }
        </div>
    </>
  )
}

export default DisplayCats