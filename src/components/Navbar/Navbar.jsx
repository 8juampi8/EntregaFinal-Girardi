import { Link } from "react-router-dom"
import Cartwidget from "./Cartwidget/Cartwidget"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">

        <Link to="/" className="brand">
            <img src="../../../img/tbrc.png" alt="" />
        </Link>

        <ul className="category-container">

            <Link to="/category/Lata" className="category-link">Latas</Link>

            <Link to="/category/Chopera 20L" className="category-link">Choperas 20L</Link>

            <Link to="/category/Chopera 50L" className="category-link">Choperas 50L</Link>

        </ul>

        <Cartwidget />

    </nav>
  )
}

export default Navbar
