import Header from "./Headers"
import useFetchProduct from "../utils/useFetchProduct";
import { PRODUCT_API } from '../utils/constants'
import Shimmer from "./shimmer";
import ProductCard from "./productCard";
import { useContext } from "react";
import { cartContext } from "../productWrapper";

const Product = ()=>{
    const products = useFetchProduct(PRODUCT_API)
    const {cartData} = useContext(cartContext)

    if(products.length ==0) return <Shimmer/>

    return (
        <div>
            <Header></Header>
            <div className="wrapper">
                <div className="product">
                    {products.map(product=>{
                        return <ProductCard key={product.id} productData={product} isCart={false}/>
                    })}
                </div>
                <div className="cart"> 
                    {cartData?.length == 0 ? <div className="empty-cart-info"> 
                        <h3>Cart</h3>
                        <div>your cart is empty</div>
                    </div>: cartData.map(product=>{
                        return <ProductCard key={product.id} productData={product} isCart="true"/>
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Product