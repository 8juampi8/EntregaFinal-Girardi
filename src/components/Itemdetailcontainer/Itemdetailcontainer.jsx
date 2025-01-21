import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import Itemdetail from './Itemdetail/Itemdetail'
import { useParams, useNavigate } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'
import db from "../../db/db.js"
import Errorpage from '../Errorpage/Errorpage.jsx'
import "./Itemdetailcontainer.css"

const Itemdetailcontainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {idProduct} = useParams()
    const navigate = useNavigate()

    const getProduct = async() => {
      try{
        setLoading(true)
        if(idProduct){
          const docRef = doc(db, "products", idProduct)
          const dataDb = await getDoc(docRef)

          if (!dataDb.exists()) {
            // Si no existe el producto, redirige a la página de error
            navigate('/error')
          } else {
            const data = {id: dataDb.id, ...dataDb.data()}
            setProduct(data)
          }
        } else {
          // Si no hay idProduct, redirige a la página de error
          navigate('/error')
        }
      } catch(error){
        console.error(error)
        // En caso de error, también redirige a la página de error
        navigate('/error')
      } finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
        getProduct()
    }, [idProduct])

  return (
    <div className='itemdetailcontainer'>
        {
          loading === true ? (
            <div style={{height: "80vh", display: "flex", justifyContent:"center", alignItems:"center"}}>
              <SyncLoader color="#FF7033" size={15} />
            </div>
          ) : (
            product.id ? (<Itemdetail product={product} />) : (<Errorpage />)
          )
        }
    </div>
  )
}

export default Itemdetailcontainer
