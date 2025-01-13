import { getProducts } from "../../data/data"
import { useState, useEffect } from "react"
import Itemlist from "./Itemlist/Itemlist"
import { useParams } from "react-router-dom"

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const {idCategory} = useParams()

    useEffect(()=> {

        getProducts()
        .then((data)=> {
            if(idCategory){
                const filterProducts = data.filter((product)=>product.category === idCategory)
                setProducts(filterProducts)
            }else{
                setProducts(data)
            }
        })
        .catch((error)=> {
            console.error(error)
        })
        .finally(()=>{
            console.log("Termino el Loading")
        })

    }, [idCategory])

  return (
    <div>

        <h1>{greeting}</h1>
        <Itemlist products={products} />
        
    </div>
  )
}

export default Itemlistcontainer
