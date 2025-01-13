import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div>

        <img src={product.image} alt="" />
        <p>{product.category} {product.name}</p>
        <p>${product.price}</p>
        <Link to={"/detail/"+product.id}>Ver más</Link>

    </div>
  )
}

export default Item
