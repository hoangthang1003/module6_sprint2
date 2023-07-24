import axios from "axios";

export const findAll = async () => {
    const res = await axios.get(`http://localhost:8080/product`)
    return res.data;
}
export const findAllByGender = async (gender) => {
    const res = await axios.get(`http://localhost:8080/product/gender/${gender}`)
    return res.data;
}
export const findById = async (id) => {
    const res = await axios.get(`http://localhost:8080/product/${id}`)
    return res.data;
}

export const productService = {
    findAll,
    findAllByGender,
    findById
}