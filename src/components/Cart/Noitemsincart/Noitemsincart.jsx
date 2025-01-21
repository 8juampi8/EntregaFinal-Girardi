import { Link } from 'react-router-dom'
import "./Noitemsincart.css"

const Noitemsincart = () => {
  return (
    <div className='noitemsincart'>
      <h2>Ups... el carrito se encuentra vacío</h2>
      <Link to="/" className='go-buy-btn'>Ir a comprar</Link>
    </div>
  )
}

export default Noitemsincart
