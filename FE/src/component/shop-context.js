// CartContext.js
import React, {createContext, useState, useContext, useEffect} from 'react';
import {productService} from "../service/ProductService";
import {useCart} from "./CartContext";


export function ShopDetail() {
    const {cartItems, addToCart, removeFromCart, clearCart} = useCart();
    const [products, setProductList] = useState(null);
    const findAll = async () => {
        const res = await productService.findAll();
        setProductList(res.content)
    }
    useEffect(() => {
        findAll()
    }, [])
    if (!products) {
        return null
    }
    return (
        <>
            <div>
                {/* Hiển thị giỏ hàng */}
                <h2>Giỏ hàng của bạn</h2>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <div className="cart ">
                            <div className="cartItem">
                                <div className="product"><img src={item.image} /></div>
                                <div className="description"><p><b>{item.nameProduct}</b></p>
                                    <p> Price: {item.price} VND</p><p> Số lượng: {item.quantity}</p>
                                    <div className="countHandler">
                                        <button> -</button>
                                        <input value="1"/>
                                        <button> +</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                    </div>
                ))}
                <div className="checkout"><p> Subtotal: $699 </p>
                    <button> Continue Shopping</button>
                    <button> Checkout</button>
                </div>

            </div>
        </>

    );
}





