import { Link } from 'react-router-dom'
import "./ButtonsDetail.css"

const ButtonsDetail = () => {
  return (
    <div className='buttonsdetail'>
      <Link to="/cart" className='finish-btn'>Terminar mi compra</Link>
      <Link to="/" className='continue-btn'>Seguir comprando</Link>
    </div>
  )
}

export default ButtonsDetail
