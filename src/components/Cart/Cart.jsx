import { useContext } from 'react'
import { Cartcontext } from '../../context/Cartcontext'
import Noitemsincart from './Noitemsincart/Noitemsincart'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Cart = () => {

    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(Cartcontext)

    if(cart.length === 0){
        return(
            <Noitemsincart />
        )
    }

  return (
    <ul className='cart'>
        {
            cart.map((productCart)=>(
                <li key={productCart.id}>
                    <img src={productCart.image} alt="" className='product-img-cart' />
                    <p>{productCart.category} {productCart.name}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio unitario: {productCart.price}</p>
                    <FaTrashAlt onClick={()=> deleteProductById(productCart.id)}   className='delete-product-btn' />
                </li>
            ))
        }

        <div className='cart-total-price'>
            <p>Total a pagar: ${totalPrice()}</p>
            <button onClick={deleteCart} className='delete-cart-btn'>Vaciar el carrito<FaTrashAlt /></button>
            <Link to="/checkout" className='continue-buy'>Continuar con mi compra <FaArrowAltCircleRight /></Link>
        </div>
    </ul>
  )
}

export default Cart
