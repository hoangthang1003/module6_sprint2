import axios from "axios";

export const findAll = async (page,size) => {
    const res = await axios.get(`http://localhost:8080/api/public/product/?page=${page}${size ? `&size=${size}` : ''}`)
    return res.data;
}
export const show = async () => {
    const res = await axios.get(`http://localhost:8080/api/public/product/product`)
    return res.data;
}
export const findAllByGender = async (gender) => {
    const res = await axios.get(`http://localhost:8080/api/public/product/gender/${gender}`)
    return res.data;
}
export const findById = async (id) => {
    const res = await axios.get(`http://localhost:8080/api/public/product/${id}`)
    return res.data;
}
export const findProductType = async () => {
    const res = await axios.get(`http://localhost:8080/api/public/productType`)
    return res.data;
}
export const getAllProductByType = async (type) => {
    const res = await axios.get(`http://localhost:8080/api/public/productType/${type}`)
    return res.data;
}


export const productService = {
    findAll,
    findAllByGender,
    findById,
    show
}