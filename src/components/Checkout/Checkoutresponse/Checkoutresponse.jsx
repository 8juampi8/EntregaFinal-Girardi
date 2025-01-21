import { Link } from "react-router-dom"
import "./Checkoutresponse.css"

const Checkoutresponse = ({orderId}) => {
  return (
    <div className="checkoutresponse">
      <h2>Su orden ha sido enviada correctamente! Guarde su número de seguimiento:</h2>
      <h3>{orderId}</h3>
      <Link to="/" className="go-home-btn">Volver al inicio</Link>
    </div>
  )
}

export default Checkoutresponse
