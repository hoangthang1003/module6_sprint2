import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {productService} from "../service/ProductService";
import Swal from "sweetalert2";
import {addCart, findCartByCustomerId} from "../service/CartService";
import {ValueIconCartContext} from "./ValueIconCartContext";

export function ShopSingle() {
    const param = useParams();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { iconQuantity, setIconQuantity } = useContext(ValueIconCartContext);
    const [carts, setCarts] = useState([]);


    const findAllCart = async () => {
        try {
            const result = await findCartByCustomerId(token);
            setCarts(result);
            const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
            setIconQuantity(totalQuantity);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {

        findAllCart();



    }, []);

    const handleIncrease = () => { // cộng sản phẩm
        if (quantity < product.quantity) {
            setQuantity(quantity + 1);
        } else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (event) => { // thêm sản phẩm vào giỏ hàng nếu số lượng k đủ thì báo
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= product.quantity) {
            setQuantity(newQuantity);
        } else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };
    const handleAddCart = async (idProduct, productQuantity) => {
        const cart = {
            product: idProduct,
            quantity: quantity,
            status: true,
        };
        try {
                const existingCart = carts.find(c => c.product.idProduct === idProduct);
                if (existingCart && productQuantity > existingCart.quantity) {
                    await addCart(cart, token);
                    await setIconQuantity(iconQuantity + 1);
                } else {
                    await Swal.fire({
                        title: 'Cảnh báo',
                        text: 'Số lượng sản phẩm ít hơn ngưỡng cho phép!',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                    });
                }

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCartByCustomerId(token);
                const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
                setIconQuantity(totalQuantity);
            })() : setIconQuantity(0)
        }
    }, []);
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
                <section className="bg-light">
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-lg-5 mt-5">
                                <div className="card mb-3">
                                    <img
                                        className="card-img img-fluid"
                                        src={product.image}
                                        alt="Card image cap"
                                        id="product-detail"
                                        style={{
                                            height: '510px', // Chiều cao sẽ tự điều chỉnh để giữ tỷ lệ gốc của hình ảnh
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {/*Start Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                            <i className="text-dark fas fa-chevron-left"/>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                    {/*Start Carousel Wrapper*/}
                                    <div
                                        id="multi-item-example"
                                        className="col-10 carousel slide carousel-multi-item"
                                        data-bs-ride="carousel"
                                    >
                                        {/*Start Slides*/}
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            {/*First slide*/}
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_01.jpg"
                                                                alt="Product Image 1"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_02.jpg"
                                                                alt="Product Image 2"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_03.jpg"
                                                                alt="Product Image 3"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_04.jpg"
                                                                alt="Product Image 4"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_05.jpg"
                                                                alt="Product Image 5"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_06.jpg"
                                                                alt="Product Image 6"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*/.Second slide*/}
                                            {/*Third slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_07.jpg"
                                                                alt="Product Image 7"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_08.jpg"
                                                                alt="Product Image 8"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img
                                                                className="card-img img-fluid"
                                                                src="../assets/img/product_single_09.jpg"
                                                                alt="Product Image 9"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*/.Third slide*/}
                                        </div>
                                        {/*End Slides*/}
                                    </div>
                                    {/*End Carousel Wrapper*/}
                                    {/*Start Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a href="#multi-item-example" role="button" data-bs-slide="next">
                                            <i className="text-dark fas fa-chevron-right"/>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                </div>
                            </div>
                            {/* col end */}
                            <div className="col-lg-7 mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="h2">{product.nameProduct}</h1>
                                        <p className="h3 py-2">{new Intl.NumberFormat().format(
                                            product.price)} VND</p>
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
                                                    <strong>{product.local}</strong>
                                                </p>
                                            </li>
                                        </ul>
                                        <h6>Mô tả:</h6>
                                        <p>
                                            {product.description}
                                        </p>

                                        <ul className="list-inline" key={1}>
                                            <li className="list-inline-item">
                                                <h6>Màu sắc :</h6>
                                            </li>
                                            <li className="list-inline-item">
                                                <p className="text-muted">
                                                    <strong>{product.color}</strong>
                                                </p>
                                            </li>
                                        </ul>
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <ul className="list-inline pb-3">
                                                            <li className="list-inline-item">
                                                                Size:
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="btn btn-success btn-size">{product.size}</span>
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
                    <button className="btn btn-success" id="btn-minus" onClick={() => handleDecrease()}>
                      -
                    </button>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <input type="text" style={{fontSize: 40, width: 40, height: 40}}
                                                                       onChange={(event) => {
                                                                           handleInputChange(event)
                                                                       }} value={quantity}/>
                                                            </li>
                                                            <li className="list-inline-item">
                    <button className="btn btn-success" id="btn-plus" onClick={() => handleIncrease()}>
                      +
                    </button>
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
                                                        <button type="submit" className="btn btn-success btn-lg"
                                                                name="submit" onClick={() => handleAddCart(param.id)}>Add To Cart
                                                        </button>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

            </>


        </>

    )
}