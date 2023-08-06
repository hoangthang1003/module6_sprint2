import React, {useContext} from "react";
import {ShopContext} from "./shop-context";
import {Link} from "react-router-dom";

export const CartItem = (props) => {
    const {idProduct, nameProduct, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();


    return (
        <>

            <div className="container-fluid" style={{marginTop: "60px"}}>
                <div className="row px-xl-5">

                    <div>

                            <tbody className="align-middle">
                            <tr>
                                <td>
                                    <img src={image} style={{width: "70px"}}/>
                                    <span className="text-center">{nameProduct}</span>

                                </td>
                                <td className="text-center">
                                    {new Intl.NumberFormat().format(price)} VND
                                </td>
                                <td>
                                    <div className="countHandler">
                                        <button onClick={() => removeFromCart(idProduct)} className="btn btn-danger">-
                                        </button>
                                        <input
                                            value={cartItems[idProduct]}
                                            onChange={(e) => updateCartItemCount(Number(e.target.value), idProduct)}
                                        />
                                        <button onClick={() => addToCart(idProduct)} className="btn btn-danger"> +
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                    </div>
                </div>
            </div>

        </>

    );
};
