import React from 'react'

const Itemdetail = ({product}) => {
  return (
    <div className='itemdetail'>
      <img src={product.image} alt="" />
      <h2>{product.category} {product.name}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default Itemdetail
