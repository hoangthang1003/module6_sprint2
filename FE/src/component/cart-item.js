import React, { useContext } from "react";
import {ShopContext} from "./shop-context";

export const CartItem = (props) => {
    const { idProduct, nameProduct,price, image} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={image}     style={{
                height: '245px', // Chiều cao sẽ tự điều chỉnh để giữ tỷ lệ gốc của hình ảnh
                borderRadius: '8px',
                // Đặt góc bo tròn 8px cho hình ảnh
            }}/>
            <div className="description">
                <p>
                    <b>{nameProduct} {idProduct}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(idProduct)}> - </button>
                    <input
                        value={cartItems[idProduct]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), idProduct)}
                    />
                    <button onClick={() => addToCart(idProduct)}> + </button>
                </div>
            </div>
        </div>
    );
};
