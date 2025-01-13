import React from 'react'
import Item from '../Item/Item'

const Itemlist = ({products}) => {
  return (
    <div>

      {
        products.map((product)=>(
            <Item product={product} key={product.id} />
        ))
      }

    </div>
  )
}

export default Itemlist
