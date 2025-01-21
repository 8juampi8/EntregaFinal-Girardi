import { useState } from 'react'
import "./Itemcount.css"

const Itemcount = ({stock, addProductAtCart}) => {

    const [count, setCount] = useState(1)

    const handleClickRemove = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const handleClickAdd = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

  return (
    <div className='itemcount'>
      <button onClick={handleClickRemove} className='less-btn'>-</button>
      <p>{count}</p>
      <button onClick={handleClickAdd} className='more-btn'>+</button>
      <button onClick={() => addProductAtCart(count)} className='addproduct-btn'>Agregar producto</button>
    </div>
  )
}

export default Itemcount
