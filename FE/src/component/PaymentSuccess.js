import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import moment from "moment";
import {findCustomer} from "../service/Customer";

export function PaymentSuccess() {

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [customer, setCustomer] = useState(null);
    const currentDate = new Date();
    const param = useParams();

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    if (!customer) {
        return null
    }
    console.log(customer)
    return (
        <>
            <div className="container-fluid" style={{textAlign: "center"}}>
                <h1 style={{color: "red"}}>Thanh toán thành công</h1>
                <div style={{marginTop:"20px"}}>
                    <table className="table table-striped " style={{width: 500,textAlign:"center", margin:"auto"}}>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Tên khách hàng</th>
                            <td>{customer?.name}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{customer?.address}</td>
                        </tr>
                        <tr>
                            <th>Ngày đặt hàng</th>
                            <td>{moment(currentDate).format('DD-MM-YYYY')}</td>
                        </tr>
                        <tr>
                            <th>Tổng tiền</th>
                            <td>
                                {new Intl.NumberFormat().format(+param.totalPrice)} VND
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}