import axios from "axios";
import Swal from "sweetalert2";

export const findCartByCustomerId = async (token) => {
    const headers = {Authorization: "Bearer " + token}
    try {
        const result = await axios.get(`http://localhost:8080/api/user/cart`, {headers});
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const addCart = async (cart, token) => {
    const headers = {Authorization: "Bearer " + token}
    try {
        const result =await axios.post(`http://localhost:8080/api/user/cart/add`, {...cart}, {headers})
        console.log(result.data)
    } catch (e) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Sản phẩm trong kho đã hết!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}

export const updateCart = async (cart, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.put(`http://localhost:8080/api/user/cart/update`, {...cart}, {headers});
    } catch (e) {
        await Swal.fire({
            title: 'Thông báo',
            text: 'Sản phẩm trong kho đã hết!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}
export const deleteCart = async (id, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.delete(`http://localhost:8080/api/user/cart/delete/` + id, {headers});
    } catch (e) {
        console.log(e);
    }
}
export const payment = async (totalPrice, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.post(`http://localhost:8080/api/user/order/payment`, {...totalPrice}, {headers});
    } catch (e) {
        console.log(e);
    }
}
export const historyShopping = async (auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        return (await axios.get(`http://localhost:8080/api/user/order/history`, {headers})).data;
    } catch (e) {
        console.log(e);
    }
}
export const CartService = {
    addCart
}