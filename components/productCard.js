import { useContext, useState, useEffect } from "react"
import { cartContext } from "../productWrapper"
import Notification from "./Notification"


const ProductCard = ({ productData, isCart }) => {
    const { title, price, description, image } = productData
    const {cartData, setCartData } = useContext(cartContext)
    const notificationMessage = "Product already is in the cart"
    const [notification, setNotification] = useState(false);

    const addToCart = () => {
        const isDataPresent = cartData.filter(data => data.id == productData.id)
         if (isDataPresent?.length > 0) {
                setNotification(true)                
        }
        else {
            setCartData(prev => {
               return [...prev, productData]
            });

        }
    }

    useEffect(() => {
        if (notification) {
            setNotification(true);
            setTimeout(() => setNotification(false), 2000);
        }
    }, [notification]);



    const removeCard = () => {
        setCartData(prev => {
            prev = prev.filter(data => data.id != productData.id)

            return [...prev]
        });
    }

    return (
        <>
            <div className="card">
                {isCart ? (<div className="cross-mark"> <i className="fa-solid fa-circle-xmark cross-mark-wrapper" onClick={removeCard}></i> </div>) : <></>}

                <img src={image} alt="Product Image" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="footer">
                    <div className="price">${price}</div>
                    {!isCart ? <button onClick={addToCart}>Add to Cart</button> : <></>}

                </div>
            </div>

            <Notification message={notificationMessage} showNotification={notification} />
        </>
    )
}

export default ProductCard