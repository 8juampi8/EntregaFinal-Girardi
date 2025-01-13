import { Link } from "react-router-dom"
import Cartwidget from "./Cartwidget/Cartwidget"

const Navbar = () => {
  return (
    <nav className="navbar">

        <Link to="/" className="brand">
            <img src="" alt="" />
        </Link>

        <ul>

            <Link to="/category/Lata">Latas</Link>

            <Link to="/category/Chopera 20L">Choperas 20L</Link>

            <Link to="/category/Chopera 50L">Choperas50L</Link>

        </ul>

        <Cartwidget />

    </nav>
  )
}

export default Navbar
