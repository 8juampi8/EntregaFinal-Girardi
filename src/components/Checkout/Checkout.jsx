import Checkoutform from './Checkoutform/Checkoutform'
import { useContext, useState } from 'react'
import {Cartcontext} from "../../context/Cartcontext"
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from "../../db/db.js"
import Checkoutresponse from './Checkoutresponse/Checkoutresponse'
import validateForm from '../../utils/validateForm.js'
import { toast } from 'react-toastify'
import { SyncLoader } from 'react-spinners'
import "./Checkout.css"

const Checkout = () => {

  const {cart, totalPrice} = useContext(Cartcontext)

  const [orderId, setOrderId] = useState(null)

  const [loading, setLoading] = useState(false)

  const [dataForm, setDataForm] = useState({
    fullname: "",
    email: "",
    phone: ""
  })

  const handleChangeInput = (event) => {
    setDataForm({...dataForm, [event.target.name] : event.target.value})
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()
    const order = {buyer: {...dataForm}, products: [...cart], total: totalPrice(), date: Timestamp.fromDate(new Date())}

    try{
      setLoading(true)
      const response = await validateForm(dataForm)
      if(response.status === "success"){
        await sendOrder(order)
      } else{
        toast.warn(response.message)
      }
    } finally{
      setLoading(false)
    }
  }

  const sendOrder = async(order) => {
    try{
      const orderRef = collection(db, "orders")
      const response = await addDoc(orderRef, order)
      setOrderId(response.id)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className='checkout'>
      {
        loading === true ? (<div style={{height: "80vh", display: "flex", justifyContent:"center", alignItems:"center"}}> <SyncLoader color="#FF7033" size={15} /> </div>) : (
          orderId ? (<Checkoutresponse orderId={orderId} />) : (<Checkoutform dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />)
          )
      }
    </div>
  )
}

export default Checkout
