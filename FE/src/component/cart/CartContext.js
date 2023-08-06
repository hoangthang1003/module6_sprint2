import React, { useContext } from "react";
import "./style.css"
import {Link, useNavigate} from "react-router-dom";
import "../../css/cart.css";
import {ShopContext} from "../shop-context";
export const Cart = () => {

    const { cartItems, getTotalCartAmount, checkout,products,getTotalCartItems,removeFromCart, updateCartItemCount,addToCart} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    console.log(products)
    return (
        <div className="card1" style={{marginTop: "20px", marginBottom: "20px"}}>
            <div className="row">
                <div className="col-md-8 cart1">
                    <div className="title1" style={{width: "100%"}}>
                        <div className="row">
                            <div className="col">
                                <h4>
                                    <b>Gio Hang</b>
                                </h4>
                            </div>

                        </div>
                    </div>
                    {products.map((product,index) => (
                        cartItems[product.idProduct] !== 0 && (
                            <div className="row border-top border-bottom" style={{ width: "100%" }} key={product.idProduct}>
                                <div className="row main align-items-center">
                                    <div className="col-2">
                                        <img
                                            style={{ width: "3.5rem" }}
                                            className="img-fluid"
                                            src={product.image}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">{product.category}</div>
                                        <div className="row">{product.nameProduct}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => removeFromCart(product.idProduct)} className="btn btn-danger">-
                                        </button>
                                        {/*<a style={{ color: "black" }} href="#" className="border">*/}
                                        {/*    {product.idProduct}*/}
                                        {/*</a>*/}
                                        <input className="form-control-sm"
                                            value={cartItems[product.idProduct]}

                                            onChange={(e) => updateCartItemCount(Number(e.target.value), product.idProduct)}
                                        />
                                        <button onClick={() => addToCart(product.idProduct)} className="btn btn-danger"> +
                                        </button>
                                    </div>
                                    <div className="col">
                                        VND {product.price.toFixed(2)} <span className="close">✕</span>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                    <div className="back-to-shop">
                        <a style={{color: "black"}} href="#">←</a>
                        <Link className="breadcrumb-item text-dark" to={"/"}>Tro ve</Link>
                    </div>
                </div>
                <div className="col-md-4 summary1">
                    <div>
                        <h5>
                            <b>Summary</b>
                        </h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 10 }}>
                            Số lượng sản phẩm {getTotalCartItems()}

                        </div>
                        <div className="col text-right">{getTotalCartAmount()} VND</div>
                    </div>
                    <form style={{padding: "2vh 0"}}>
                        <p>Phí Ship</p>
                        <select style={{
                                border: "1px solid rgba(0, 0, 0, 0.137)",
                            padding: "1.5vh 1vh",
                            marginBottom: "4vh",
                            outline: "none",
                            width: "100%",
                            backgroundColor: "rgb(247, 247, 247)"
                        }}>
                            <option className="text-muted">Standard-Delivery- €5.00</option>
                        </select>
                        <p>Mã giảm giá</p>
                        <input id="code" placeholder="Enter your code" style={{border: "1px solid rgba(0, 0, 0, 0.137)",
                            padding: "1vh",
                            marginBottom: "4vh",
                            outline: "none",
                            width: "100%",
                            backgroundColor: "rgb(247, 247, 247)"}}/>
                    </form>
                    <div
                        className="row"
                        style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
                    >
                        <div className="col">Tổng giá</div>
                        <div className="col text-right">{getTotalCartAmount} VND</div>
                    </div>
                    <button className="btn" style={{
                        backgroundColor: "#000",
                        borderColor: "#000",
                        color: "white",
                        width: "100%",
                        fontSize: "0.7rem",
                        marginTop: "4vh",
                        padding: "1vh",
                        borderRadius: 0,
                    }}>CHECKOUT</button>
                </div>
            </div>
        </div>
    //     <div className="cart">
    //             <div className="col-12">
    //                 <nav className="breadcrumb bg-light mb-30">
    //                     <Link className="breadcrumb-item text-dark" to={"/"}>
    //                         Home
    //                     </Link>
    //                     <span className="breadcrumb-item active">Giỏ Hàng</span>
    //                 </nav>
    //             </div>
    //         <div className="cart">
    //             <table className="table table-striped">
    //                 <thead className="table-secondary text-center">
    //                 <tr>
    //                     <th>Tên Sản Phẩm</th>
    //                     <th>Giá</th>
    //                     <th>Số Lượng</th>
    //                 </tr>
    //                 </thead>
    //             {products.map((product) => {
    //                 if (cartItems[product.idProduct] !== 0) {
    //
    //                     return <CartItem data={product} />;
    //                 }
    //             })}
    //             </table>
    //         </div>
    //         <div className="col-lg-3"
    //              style={{height: "50%", boxShadow: "0px 0px 14px black", marginLeft: "auto"}}>
    //             <h5 style={{textAlign: "center"}} className="mt-3">
    //                 Giỏ Hàng
    //             </h5>
    //             <div className="p-30 mb-5">
    //                 <div className="border-bottom pb-2">
    //                     <div className="d-flex justify-content-between mb-3">
    //                         <h6>Thành tiền:</h6>
    //                         <h6>
    //                             {new Intl.NumberFormat().format(totalAmount)} VND
    //                         </h6>
    //                     </div>
    //                     <div className="d-flex justify-content-between mb-3">
    //                         <h6 className="font-weight-medium">Tiền ship:</h6>
    //                         <h6>0 VND</h6>
    //                     </div>
    //                     <div className="d-flex justify-content-between mb-3 ">
    //                         <h6 className="font-weight-medium">Giảm giá:</h6>
    //                         <h6>0 VND</h6>
    //                     </div>
    //                 </div>
    //                 <div className="pt-2">
    //                     <div className="d-flex justify-content-between mt-2">
    //                         <h5>Tổng số tiền: </h5>
    //                         <h5>
    //                             {new Intl.NumberFormat().format(totalAmount)} VND
    //                         </h5>
    //                     </div>
    //                     <button className="btn btn-warning mt-3" style={{width: "100%"}}>
    //                         Thanh toán <i className="bi bi-wallet2"/>
    //                     </button>
    //                     <button className="btn btn-secondary mt-3" style={{width: "100%"}}>
    //                         <Link to="/" style={{textDecoration: "none", color: "white"}}>
    //                             <i className="bi bi-caret-left-square"/> Mua thêm sản phẩm
    //                         </Link>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //
    //         {totalAmount > 0 ? (
    //             <div className="checkout">
    //                 <button onClick={() => navigate("/")}> Continue Shopping </button>
    //                 <button
    //                     onClick={() => {checkout();}}>
    //                     {" "}
    //                     Checkout{" "}
    //                 </button>
    //             </div>
    //         ) : (
    //             <h1>Giỏ hàng của bạn chưa có sản phẩm</h1>
    //         )}
    //     </div>
    );
};
