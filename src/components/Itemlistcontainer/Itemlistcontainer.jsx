import { useState, useEffect } from "react"
import Itemlist from "./Itemlist/Itemlist"
import { useParams } from "react-router-dom"
import { SyncLoader } from "react-spinners"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./Itemlistcontainer.css"

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCategory} = useParams()

    const collectionName = collection(db, "products")

    const getProducts = async() => {
        try{
            setLoading(true)
            const dataDb = await getDocs(collectionName)
            const data = dataDb.docs.map((productDb)=>{
                return {id: productDb.id, ...productDb.data()}
            })
            setProducts(data)
        } catch(error){
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const getProductsByCategory = async() => {
        try{
            setLoading(true)
            const filterAsk = query(collectionName, where("category", "==", idCategory))
        
        const dataDb = await getDocs(filterAsk)

        const data = dataDb.docs.map((productDb)=>{
            return {id: productDb.id, ...productDb.data()}
        })

        setProducts(data)
        }  catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=> {

        if(idCategory){
            getProductsByCategory()
        } else{
            getProducts()
        }

        }, [idCategory])


  return (
    <div className="itemlistcontainer">

        <h1>{greeting}</h1>

        {
            loading === true ? (<div style={{height: "30vh", display: "flex", justifyContent:"center", alignItems:"center"}}> <SyncLoader color="#FF7033" size={15} /> </div>) : (<Itemlist products={products} />)
        }
        
    </div>
  )
}


export default Itemlistcontainer
