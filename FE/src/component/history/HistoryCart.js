import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import {historyShopping} from "../../service/CartService";
import {findCustomer} from "../../service/Customer";
import {orderDetail} from "../../service/OrderDetailService";

export function HistoryCart() {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [customer, setCustomer] = useState();
    const [orderDetails, setOrderDetails] = useState([])
    useEffect(() => {
        (async () => {
            const result = await historyShopping(token);
            setOrders(result);
            console.log(result);
        })()
    }, []);

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);

    const getData = async (id) => {
        try {
            const data = await orderDetail(id, token);
            console.log(data);
            setOrderDetails(data);
        } catch (error) {
            console.error(error);
            // Xử lý lỗi ở đây nếu cần
        }
    };


    return (
        <>
            <div className="container-fluid" style={{marginTop: 40}}>
                <h1 className="text-center" style={{marginBottom: 20}}>Lịch Sử Đặt Hàng </h1>
                {orders.length === 0 ? (
                    <div className="row border-top" style={{textAlign:"center"}}>
                        <h1>Bạn chưa đặt hàng</h1>
                        <div className="col-12">
                            <img
                                src="https://drive.gianhangvn.com/image/empty-cart.jpg"
                                alt="Giỏ hàng trống"/>
                        </div>
                        <button className="btn btn-secondary mt-3" style={{width: "25%", margin:"auto"}}>
                            <Link to="/" style={{textDecoration: "none", color: "white"}}>
                                <i className="bi bi-caret-left-square"/> Tiếp tục mua sản phẩm
                            </Link>
                        </button>
                    </div>
                ) : (
                    <table className="table table-secondary">
                        <thead>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt hàng</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>MH-{order.idOrders}</td>
                                <td>{order.invoiceDate}</td>
                                <td>{new Intl.NumberFormat().format(order.totalPayment)} VND</td>
                                <td>{order.status  === true ? "Đã giao" : "Đang giao"}</td>
                                <td>
                                    <a onClick={() => getData(order.idOrders)} type="button"
                                       className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal">
                                        Chi tiết
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-center"
                             style={{color: "red", fontSize: 20, fontWeight: "bolder"}}>
                            <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết hoá đơn</h5>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Số thứ tự</th>
                                    <th>Sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Số lượng</th>
                                    <th>Tình trạng</th>
                                </tr>
                                </thead>
                                <tbody>
                                {orderDetails.map((orderDetail, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{orderDetail?.product?.productName}</td>
                                        <td><img src={orderDetail?.product?.image} alt="" style={{width:"100px"}}/></td>
                                        <td>{orderDetail?.quantityOrder}</td>
                                        <td>{orderDetail?.status  == true ? "Đã giao" : "Đang giao"}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal">Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}