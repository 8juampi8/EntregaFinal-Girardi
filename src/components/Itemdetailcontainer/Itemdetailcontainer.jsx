import React, { useEffect, useState } from 'react'
import { getProducts } from '../../data/data'
import Itemdetail from './Itemdetail/Itemdetail'
import { useParams } from 'react-router-dom'

const Itemdetailcontainer = () => {

    const [product, setProduct] = useState({})

    const {idProduct} = useParams()

    useEffect(()=>{

        getProducts()
          .then((data)=>{
            const productFind = data.find((dataProduct)=>dataProduct.id == idProduct)
            setProduct(productFind)
         })

    }, [idProduct])

  return (
    <div className='itemdetailcontainer'>
        <Itemdetail product={product} />
    </div>
  )
}

export default Itemdetailcontainer
