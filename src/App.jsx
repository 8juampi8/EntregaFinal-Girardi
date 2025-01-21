import Navbar from "./components/Navbar/Navbar"
import Itemlistcontainer from "./components/Itemlistcontainer/Itemlistcontainer"
import Itemdetailcontainer from "./components/Itemdetailcontainer/Itemdetailcontainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/Cartcontext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { ToastContainer } from "react-toastify"
import Errorpage from "./components/Errorpage/Errorpage"
import "./App.css"

const App = () => {
  return (
    <div>
      
        <BrowserRouter>

          <CartProvider>

            <Navbar />

            <ToastContainer />

            <div className="background">
              <Routes>
                <Route path="/" element={<Itemlistcontainer greeting={"Tabula Rasa Cerveza"} />} />
                <Route path="/category/:idCategory" element={<Itemlistcontainer greeting={"Tabula Rasa Cerveza"} />} />
                <Route path="/detail/:idProduct" element={<Itemdetailcontainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/error" element={<Errorpage />} />
              </Routes>
            </div>
            

          </CartProvider>

        </BrowserRouter>      

    </div>
  )
}

export default App
