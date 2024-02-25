import { Link } from "react-router-dom"
import "../styles/cardlayout.scss"
import Currency from "../helpers/Currency"
import useQuantity from "../helpers/Quantity"
import AddToCart from "../helpers/AddToCart"


export default function CardLayout(props) {
  const prop = props.props
  const {quantity, render} = useQuantity(prop)

  let newProp = prop
  newProp.quantity = quantity

  const handleModalClick = (e) => {
    //remove the hide button
    let parentNode = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild
    console.log(parentNode.firstChild)
    let corrNode = parentNode.firstChild
    corrNode.classList.remove("hide")
  }

  return (
    
    <div className="card" >
      <Link to={"/app/products/product/"+(prop.id).toString()}>
        <div onClick = {(e)=>{handleModalClick (e)}}>
        <img src={prop.image} alt={prop.title} />
        <div className="bottom-card">
            <h5 className="product-name">{prop.title}</h5>
        </div>        
        </div>
      </Link>
    <h4 className="price"><i>{Currency(prop.price)}</i></h4>
    {render}
    <AddToCart props={newProp} />
   </div>
  )
}
