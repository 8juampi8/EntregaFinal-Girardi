import db from "../db/db.js"
import { collection, addDoc } from "firebase/firestore"

const products = [

    // LATAS    
    {
        id: 1,
        name: "Summer Ale",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: "",
        stock: 10
    },

    {
        id: 2,
        name: "Session Ipa",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: "",
        stock: 10
    },

    {
        id: 3,
        name: "English Porter",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: "",
        stock: 10
    },

    {
        id: 4,
        name: "Florida Honey",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: "",
        stock: 10
    },

    {
        id: 5,
        name: "American Ipa",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: "",
        stock: 10
    },

    // CHOPERAS 20L
    {
        id: 6,
        name: "Summer Ale",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: "",
        stock: 10
    },

    {
        id: 7,
        name: "Session Ipa",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: "",
        stock: 10
    },

    {
        id: 8,
        name: "English Porter",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: "",
        stock: 10
    },

    {
        id: 9,
        name: "Florida Honey",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: "",
        stock: 10
    },

    {
        id: 10,
        name: "American Ipa",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: "",
        stock: 10
    },

    // CHOPERAS 50L
    {
        id: 11,
        name: "Summer Ale",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: "",
        stock: 10
    },

    {
        id: 12,
        name: "Session Ipa",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: "",
        stock: 10
    },

    {
        id: 13,
        name: "English Porter",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: "",
        stock: 10
    },

    {
        id: 14,
        name: "Florida Honey",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: "",
        stock: 10
    },

    {
        id: 15,
        name: "American Ipa",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: "",
        stock: 10
    },
]

const seedProducts = async() => {
    try{
        const productsRef = collection(db, "products")
        products.map(async({id, ...dataProduct})=>{
            await addDoc(productsRef, dataProduct)
        })
        console.log("Productos subidos correctamente")
    } catch(error){
        console.error(error)
    }
}

seedProducts()