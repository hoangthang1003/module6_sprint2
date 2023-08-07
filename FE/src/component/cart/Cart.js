import React, {useContext, useEffect, useState} from "react";
import {ValueIconCartContext} from "../ValueIconCartContext";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addCart, deleteCart, findCartByCustomerId, payment, updateCart} from "../../service/CartService";
import {findCustomer} from "../../service/Customer";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import "../../css/detail.css";


export function Cart() {
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [customer, setCustomer] = useState();
    const {setIconQuantity} = useContext(ValueIconCartContext)
    const [cart] = useState({
        quantity: 1,
        product: ""
    });
    const findAllCart = async () => {
        try {
            const result = await findCartByCustomerId(token);
            console.log(result)
            setCarts(result);
            console.log(result)
            const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
            setIconQuantity(totalQuantity);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    useEffect(() => {
        {
            username ? findAllCart() : setIconQuantity(0)
        }
    }, []);

    const totalPrice = carts.reduce((total, cart) => {
        return total + cart?.product?.price * cart?.quantity;
    }, 0);



    const decreaseQuantity = async (cartIndex) => { // giảm số lượng
        const updatedCarts = [...carts];
        if (updatedCarts[cartIndex].quantity > 1) {
            updatedCarts[cartIndex].quantity -= 1;
            setCarts(updatedCarts);
            try {
                await updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    product: updatedCarts[cartIndex].product?.idProduct
                }, token);
                findAllCart();
            } catch (e) {
                console.log(e);
            }
        }
    };

    const increaseQuantity = async (cartIndex) => { // tăng số lượng
        const updatedCarts = [...carts];
        updatedCarts[cartIndex].quantity += 1;
        setCarts(updatedCarts);
        await updateCart({
            ...cart,
            quantity: updatedCarts[cartIndex].quantity,
            product: updatedCarts[cartIndex].product?.idProduct
        }, token);
        findAllCart();
    };

    const handleInputChange = async (event, cartIndex) => {
        const newQuantity = parseInt(event.target.value);
        try {
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                const updatedCarts = [...carts];
                updatedCarts[cartIndex].quantity = newQuantity;
                setCarts(updatedCarts);
                await updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    product: updatedCarts[cartIndex].product?.idProduct
                }, token);
                findAllCart();
            }
        } catch (e) {
            console.log(e);
        }
    };

    const removeCart = async (id) => {
        try {
            await deleteCart(id, token);
            await Swal.fire({
                title: 'Thông báo',
                text: 'Xoá sản phẩm thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            findAllCart();
        } catch (e) {
            console.log(e);
        }
    }
    //Thanh toán bằng payment

    const handlePayment = async (totalPrice) => {
        try {
            await payment({totalPrice}, token);
            navigate(`/order-detail/${totalPrice}`)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="container-fluid" style={{marginTop: "60px"}}>
                <div className="row px-xl-5">
                    <div className="col-12">
                        <h1  className="text-center mb-3">Giỏ hàng của bạn</h1>
                    </div>
                    <div className="col-lg-8 table-responsive mb-4" style={{boxShadow: "0px 0px 14px black"}}>
                        {carts.length === 0 ? (
                            <div className="row border-top border-bottom">
                                <div className="row main">
                                    <img
                                        src="https://drive.gianhangvn.com/image/empty-cart.jpg"
                                        alt="Giỏ hàng trống"/>
                                </div>
                            </div>
                        ) : (
                            <table className="table table-striped">
                                <thead className="table-secondary text-center">
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Xóa</th>
                                </tr>
                                </thead>
                                <tbody className="align-middle">
                                {carts.map((cart, index) => (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <img src={cart?.product?.image} style={{width: "70px", height: "70px"}}/>
                                        </td>
                                        <td className="text-center">{cart?.product?.nameProduct}</td>
                                        <td className="text-center">
                                            {new Intl.NumberFormat().format(cart?.product?.price)} VND
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => decreaseQuantity(index)}
                                                    style={{padding: "inherit"}} className="btn btn-dark">
                                                <i className="fa-sharp fa-solid fa-minus"/></button>
                                            <input
                                                type="text"
                                                style={{width: "30px", textAlign: "center"}}
                                                onChange={(event) => handleInputChange(event, index)}
                                                value={cart.quantity}
                                            />
                                            <button onClick={() => increaseQuantity(index)} style={{padding: "inherit"}}
                                                    className="btn btn-dark">
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => removeCart(cart?.idCart)} className="btn btn-danger">
                                                <i className="fa-solid fa-trash-can"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                        )}
                    </div>
                    <div className="col-lg-3 mb-4"
                         style={{height: "50%", boxShadow: "0px 0px 14px black", marginLeft: "auto"}}>
                        <h5 style={{textAlign: "center"}} className="mt-3">
                            Giỏ Hàng
                        </h5>
                        <div className="p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Thành tiền:</h6>
                                    <h6>
                                        {new Intl.NumberFormat().format(totalPrice)} VND
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <h6 className="font-weight-medium">Tiền ship:</h6>
                                    <h6>0 VND</h6>
                                </div>
                                <div className="d-flex justify-content-between mb-3 ">
                                    <h6 className="font-weight-medium">Giảm giá:</h6>
                                    <h6>0 VND</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Tổng số tiền: </h5>
                                    <h5>
                                        {new Intl.NumberFormat().format(totalPrice)} VND
                                    </h5>
                                </div>
                                <PayPalScriptProvider
                                    options={{"client-id": 'AbEGfDFZsTMuitYfPAWUU_vsWHszMmW0XyEvuvMbKay_0sr81ieansnttsqN0FMUBnaJ5ar3IMRUDv7A'}}
                                >
                                    <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: parseFloat((totalPrice / 24000).toString().slice(0, 4)),
                                                            currency_code: 'USD'
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            handlePayment(totalPrice)
                                        }}
                                    />
                                </PayPalScriptProvider>
                                <button className="btn btn-secondary mt-3" style={{width: "100%"}}>
                                    <Link to="/shop" style={{textDecoration: "none", color: "white"}}>
                                        <i className="bi bi-caret-left-square"/> Mua thêm sản phẩm
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}