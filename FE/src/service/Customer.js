import axios from "axios";

export const findCustomer = async (token) => {
    const headers = {Authorization: "Bearer " + token}
    try {
        const result = await axios.get(`http://localhost:8080/api/user/customer`, {headers});
        return result.data;
    } catch (e) {
        console.log(e);
    }
}