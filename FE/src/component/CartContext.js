import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { CartItem } from "./cart-item";

import "../css/cart.css";
import {ShopContext} from "./shop-context";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout,products} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {products.map((product) => {
                    console.log(cartItems[product.idProduct])
                    if (cartItems[product.idProduct] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p> Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}> Continue Shopping </button>
                    <button
                        onClick={() => {
                            checkout();
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h1> Your Shopping Cart is Empty</h1>
            )}
        </div>
    );
};
