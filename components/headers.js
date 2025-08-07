import { useContext } from "react"
import { cartContext } from "../productWrapper"

const Header = ()=>{
    const {cartData} = useContext(cartContext)

    return (
        <div className="header">
            <div>Shopping cart</div>
            <div> <i className="fa fa-shopping-cart"></i> <sup>{cartData.length? cartData.length: <></>}</sup></div>

        </div>
    )
}

export default Header