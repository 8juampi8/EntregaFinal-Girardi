import Itemcount from '../../Itemcount/Itemcount'
import { useContext, useState } from 'react'
import { Cartcontext } from '../../../context/Cartcontext'
import Buttonsdetail from './Buttonsdetail/Buttonsdetail'
import "./Itemdetail.css"

const Itemdetail = ({product}) => {

  const {addProduct} = useContext(Cartcontext)

  const [showItemCount, setShowItemCount] = useState(true)

  const addProductAtCart = (count) => {
    const productCart = {...product, quantity: count}

    addProduct(productCart)
    setShowItemCount(false)
  }


  return (
    <div className='itemdetail'>

      <img src={product.image}/>

      <div className='text-box'>
        <h2>{product.category} {product.name}</h2>
        <p className='text-detail'>{product.description}</p>
        <p className='text-detail'>${product.price}</p>
        {
          showItemCount === true ? (<Itemcount stock={product.stock} addProductAtCart={addProductAtCart}/>) : (<Buttonsdetail />)
        }
      </div>

    </div>
  )
}

export default Itemdetail
