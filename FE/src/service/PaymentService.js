import axios from "axios";

export const payments = async (request , auth) => {
    const headers = { Authorization: "Bearer " + auth}
    try {
        const result = (await axios.post(`http://localhost:8080/api/user/payment`, request , {headers})).data;
        return result;
    } catch (e) {
        console.log(e);
    }
}