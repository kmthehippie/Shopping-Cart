import { NavLink } from "react-router-dom"
import "../styles/cardlayout.scss"

export default function CardLayout(props) {
    const prop = props.props
  return (
    <NavLink to={"product/"+(prop.id).toString()}>
      {prop.id}
        <div className="card">
        <img src={prop.image} alt={prop.title} />
        <div className="bottom-card">
            <h5 className="product-name">{prop.title}</h5>
            <h4 className="price"><i>$ {prop.price}</i></h4>
        </div> 
        </div>
    </NavLink>
  )
}
