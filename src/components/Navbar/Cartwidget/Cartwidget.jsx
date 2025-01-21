import { RiShoppingCartLine } from "react-icons/ri"
import { useContext } from "react"
import { Cartcontext } from "../../../context/Cartcontext"
import { Link } from "react-router-dom"
import "./Cartwidget.css"

const Cartwidget = () => {

  const {totalQuantity} = useContext(Cartcontext)

  let quantity = totalQuantity()

  return (
    <div className="cartwidget">
      
        <Link to="/cart"><RiShoppingCartLine size={24} color="#FF7033" /></Link>

        <p className="cart-quantity">{quantity !== 0 && quantity}</p>

    </div>
  )
}

export default Cartwidget
