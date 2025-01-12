import Cartwidget from "./Cartwidget/Cartwidget"

const Navbar = () => {
  return (
    <nav className="navbar">

        <div className="brand">
            <img src="" alt="" />
        </div>

        <ul>

            <li>Latas</li>

            <li>Choperas 20L</li>

            <li>Choperas50L</li>

        </ul>

        <Cartwidget />

    </nav>
  )
}

export default Navbar
