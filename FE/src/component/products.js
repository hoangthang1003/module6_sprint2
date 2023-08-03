import {Link} from "react-router-dom";
import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const Product = (props) => {
    const { idProduct,nameProduct, price,size,image,quantity } = props.data;
    const { addToCart, cartItems} = useContext(ShopContext);
    const cartItemCount = cartItems[idProduct];
    return (
        <div className="col-md-4" >
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img
                        className="card-img rounded-0 img-fluid"
                        src={image}
                        style={{
                            height: '350px', // Chiều cao sẽ tự điều chỉnh để giữ tỷ lệ gốc của hình ảnh
                            borderRadius: '8px', // Đặt góc bo tròn 8px cho hình ảnh
                        }}
                    />
                    <div
                        className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li>
                                <Link to={`/shop/shop_single/${idProduct}`}
                                      className="btn btn-success text-white"

                                >
                                    <i className="far fa-heart"/>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/shop/shop_single/${idProduct}`}
                                      className="btn btn-success text-white mt-2"

                                >
                                    <i className="far fa-eye"/>
                                </Link>
                            </li>
                            <li>
                                <button className="btn btn-success text-white mt-2" onClick={() => addToCart(idProduct)}>
                                    <i className="fas fa-cart-plus"/>{cartItemCount > 0 && <>  ({cartItemCount})</>}
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <a className="h3 text-decoration-none">
                        {nameProduct}
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>Size: {size}</li>
                        <li className="pt-2">
                                                        <span
                                                            className="product-color-dot color-dot-red float-left rounded-circle ml-1"/>
                            <span
                                className="product-color-dot color-dot-blue float-left rounded-circle ml-1"/>
                            <span
                                className="product-color-dot color-dot-black float-left rounded-circle ml-1"/>
                            <span
                                className="product-color-dot color-dot-light float-left rounded-circle ml-1"/>
                            <span
                                className="product-color-dot color-dot-green float-left rounded-circle ml-1"/>
                        </li>
                    </ul>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>Size: {quantity}</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                            <i className="text-warning fa fa-star"/>
                            <i className="text-warning fa fa-star"/>
                            <i className="text-warning fa fa-star"/>
                            <i className="text-muted fa fa-star"/>
                            <i className="text-muted fa fa-star"/>
                        </li>
                    </ul>
                    <p className="text-center mb-0">{new Intl.NumberFormat().format(
                        price)} VND</p>
                </div>
            </div>
        </div>
    );
};


