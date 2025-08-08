import { createContext, useState } from "react"
import Product from './components/product'

export const cartContext = createContext()

const ProductWrapper = ()=>{
    const [cartData, setCartData] = useState([])

    return (
        <cartContext.Provider value={{
            cartData: cartData,
            setCartData
        }}>
            <Product></Product>
        </cartContext.Provider>
    )

}

export default ProductWrapper