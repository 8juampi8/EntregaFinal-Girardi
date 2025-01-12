import Navbar from "./components/Navbar/Navbar"
import Itemlistcontainer from "./components/Itemlistcontainer/Itemlistcontainer"

const App = () => {
  return (
    <div>
        <Navbar />

        <Itemlistcontainer greeting={"Bienvenidos a Tabula Rasa"} />

    </div>
  )
}

export default App
