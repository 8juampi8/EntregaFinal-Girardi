import { createContext, useEffect, useState } from 'react'

const Cartcontext = createContext()

const CartProvider = ({children}) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem("cart"))

    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addProduct = (newProduct) => {
        const index = cart.findIndex((productCart)=> productCart.id === newProduct.id)

        if(index === -1){
            setCart([...cart, newProduct])
        }else{
            const newCart = [...cart]
            newCart[index].quantity = newCart[index].quantity + newProduct.quantity
            setCart(newCart)
        }
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=>total + productCart.quantity, 0)
        return quantity
    }


    const totalPrice = () => {
        const tPrice = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0)
        return tPrice
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(filterProducts)
    }

    const deleteCart = () => {
        setCart([])
    }

  return (
    <Cartcontext.Provider value={{addProduct, cart, totalQuantity, totalPrice, deleteProductById, deleteCart}} >
        {children}
    </Cartcontext.Provider>
  )
}

export {Cartcontext, CartProvider}
