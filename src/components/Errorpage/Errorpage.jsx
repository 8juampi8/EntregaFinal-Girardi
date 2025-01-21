import "./Errorpage.css"
import { CiWarning } from "react-icons/ci";

const Errorpage = () => {
  return (
    <div className="errorpage">
        <h2>¡Error! Producto no encontrado <CiWarning /></h2>
        <p>El producto que buscas no existe.</p>
    </div>
  )
}

export default Errorpage
