import axios from "axios";

export const orderDetail = async (id , auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        return (await axios.get(`http://localhost:8080/api/user/order-detail/` + id, {headers})).data;
    } catch (e) {
        console.log(e);
    }
}