import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {productService} from "../service/ProductService";
import {Field, Form, Formik, useFormikContext} from "formik";
import {ShopContext} from "./shop-context";
import {CartSingle} from "./CartSingle";

export function ShopSingle() {
    const param = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart, cartItems,products} = useContext(ShopContext);

    const [quantity, setQuantity] = useState(1); // Giá trị mặc định cho quantity




    const findById = async () => {
        const res = await productService.findById(param.id)
        setProduct(res)
    }
    useEffect(() => {
        findById()
    }, [])

    if (!product) {
        return null
    }



    return (
        <>
            <>

                <div
                    className="modal fade bg-white"
                    id="templatemo_search"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="w-100 pt-1 mb-5 text-right">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <form
                            action=""
                            method="get"
                            className="modal-content modal-body border-0 p-0"
                        >
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputModalSearch"
                                    name="q"
                                    placeholder="Search ..."
                                />
                                <button
                                    type="submit"
                                    className="input-group-text bg-success text-light"
                                >
                                    <i className="fa fa-fw fa-search text-white"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Open Content */}
                {products.map((product,index) => {
                    console.log(param.id)
                    if(cartItems[product.idProduct] == param.id)
                {
                    return <CartSingle data={product}  key={index}/>}
                })}

            </>


        </>

    )
}



