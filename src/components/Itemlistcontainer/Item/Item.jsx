import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({product}) => {
  return (
    <div className='item'>

        <img src={product.image} alt="" width={210} />
        <p>{product.category} {product.name}</p>
        <p>${product.price}</p>
        <Link to={"/detail/"+product.id} className='more-button'>Ver más</Link>

    </div>
  )
}

export default Item
