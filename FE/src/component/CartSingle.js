import {Form, Formik} from "formik";
import React, {useContext} from "react";
import {ShopContext} from "./shop-context";

export const CartSingle = (props) => {
    const { idProduct,nameProduct, price,size,image ,local,description,color,reduce,quantity,increase} = props.data;
    const { addToCart, cartItems} = useContext(ShopContext);
    const cartItemCount = cartItems[idProduct];


    return(
        <>
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img
                                    className="card-img img-fluid"
                                    src={image}
                                    alt="Card image cap"
                                    id="product-detail"
                                    style={{
                                        height: '510px', // Chiều cao sẽ tự điều chỉnh để giữ tỷ lệ gốc của hình ảnh
                                    }}
                                />
                            </div>


                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{nameProduct}</h1>
                                    <p className="h3 py-2">{new Intl.NumberFormat().format(
                                        price)} VND</p>
                                    <p className="py-2">
                                        <i className="fa fa-star text-warning"/>
                                        <i className="fa fa-star text-warning"/>
                                        <i className="fa fa-star text-warning"/>
                                        <i className="fa fa-star text-warning"/>
                                        <i className="fa fa-star text-secondary"/>
                                        <span className="list-inline-item text-dark">
                  Đánh giá 4.8 | 36 bình luận
                </span>
                                    </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Hãng:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong>{local}</strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <h6>Mô tả:</h6>
                                    <p>
                                        {description}
                                    </p>

                                    <ul className="list-inline" key={1}>
                                        <li className="list-inline-item">
                                            <h6>Màu sắc :</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong>{color}</strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <Formik
                                        initialValues={{
                                            idProduct: idProduct,
                                            nameProduct: nameProduct,
                                            color: "",
                                            size: 'S', // Chỉnh giá trị mặc định cho size
                                            price: price,
                                        }}
                                        onSubmit={async (values) => {

                                            await addToCart(values.idProduct);

                                        }}
                                    >
                                        <Form>

                                            <div className="row">
                                                <div className="col-auto">
                                                    <ul className="list-inline pb-3">
                                                        <li className="list-inline-item">
                                                            Size:

                                                        </li>
                                                        <li className="list-inline-item">
                                                                <span className="btn btn-success btn-size"
                                                                >S</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                                <span className="btn btn-success btn-size"
                                                                >M</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                                <span className="btn btn-success btn-size"
                                                                >L</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                                <span className="btn btn-success btn-size"
                                                                >XL</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                                <span className="btn btn-success btn-size"
                                                                >XL</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-auto">
                                                    <ul className="list-inline pb-3">
                                                        <li className="list-inline-item text-right">
                                                            Số lượng:
                                                            {/*<Field*/}
                                                            {/*    type="number" // Thay đổi type thành "number" để đảm bảo người dùng chỉ nhập số*/}
                                                            {/*    name="quantity"*/}
                                                            {/*    id="quantity"*/}
                                                            {/*    onChange={(e) => setQuantity(parseInt(quantity, 10))}*/}

                                                            {/*/>*/}
                                                        </li>
                                                        <li className="list-inline-item text-right">
                    <span className="btn btn-success" id="btn-minus" onClick={() => reduce()}>
                      -
                    </span>
                                                        </li>
                                                        <li className="list-inline-item">
                    <span className="badge bg-secondary" id="var-value">
                      {/* Sử dụng useFormikContext để lấy giá trị quantity từ formikProps */}
                        {quantity}
                    </span>
                                                        </li>
                                                        <li className="list-inline-item">
                    <span className="btn btn-success" id="btn-plus" onClick={() => increase()}>
                      +
                    </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row pb-3">
                                                <div className="col d-grid">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success btn-lg"
                                                        name="submit"
                                                        value="buy"
                                                    >
                                                        Buy
                                                    </button>
                                                </div>
                                                <div className="col d-grid">
                                                    <button className="btn btn-success text-white mt-2">
                                                        Add to card{cartItemCount > 0 && <>  ({cartItemCount})</>}
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}