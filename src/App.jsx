import Navbar from "./components/Navbar/Navbar"
import Itemlistcontainer from "./components/Itemlistcontainer/Itemlistcontainer"
import Itemdetailcontainer from "./components/Itemdetailcontainer/Itemdetailcontainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      
        <BrowserRouter>
        
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Itemlistcontainer greeting={"Bienvenidos a Tabula Rasa"} />} />
            <Route path="/category/:idCategory" element={<Itemlistcontainer greeting={"Bienvenidos a Tabula Rasa"} />} />
            <Route path="/detail/:idProduct" element={<Itemdetailcontainer />} />
          </Routes>

        </BrowserRouter>      

    </div>
  )
}

export default App
