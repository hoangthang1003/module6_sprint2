import React, {useEffect, useState} from "react";
import {productService} from "../service/ProductService";
import {Link} from "react-router-dom";
import {useCart} from "./CartContext";

export function Shop() {
    const { cartItems,addToCart, removeFromCart, clearCart } = useCart();
    const [productList, setProductList] = useState(null);
    const findAll = async () => {
        const res = await productService.findAll();
        setProductList(res.content)
    }
    useEffect(() => {
        findAll()
    }, [])
    if (!productList) {
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
                {/* Start Content */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="h2 pb-4">Thể loại</h1>
                            <ul className="list-unstyled templatemo-accordion">
                                <li className="pb-3">
                                    <a
                                        className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                        href="#"
                                    >
                                        Giới tính
                                        <i className="fa fa-fw fa-chevron-circle-down mt-1"/>
                                    </a>
                                    <ul className="collapse show list-unstyled pl-3">
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Nam
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Nữ
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="pb-3">
                                    <a
                                        className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                        href="#"
                                    >
                                        Giày&amp;Phụ kiện
                                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"/>
                                    </a>
                                    <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Giày
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Phụ kiện
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="pb-3">
                                    <a
                                        className="collapsed d-flex justify-content-between h3 text-decoration-none"
                                        href="#"
                                    >
                                        Sản phẩm
                                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"/>
                                    </a>
                                    <ul id="collapseThree" className="collapse list-unstyled pl-3">
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Áo
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Quần{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Giày
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none" href="#">
                                                Phụ kiện
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-inline shop-top-menu pb-3 pt-1">
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none mr-3" href="#">
                                                Trang chủ
                                            </a>
                                            <g> =></g>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none mr-3" href="#" >
                                                shop
                                            </a>

                                        </li>

                                    </ul>
                                </div>
                                <div className="col-md-6 pb-4">
                                    <div className="d-flex">
                                        <select className="form-control">
                                            <option>Nổi bật</option>
                                            <option>Từ A-Z</option>
                                            <option>Nhóm sản phẩm</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {productList.map((product, index) => (

                                    <div className="col-md-4" key={index}>
                                        <div className="card mb-4 product-wap rounded-0">
                                            <div className="card rounded-0">
                                                <img
                                                    className="card-img rounded-0 img-fluid"
                                                    src={product.image}
                                                    style={{
                                                        height: '350px', // Chiều cao sẽ tự điều chỉnh để giữ tỷ lệ gốc của hình ảnh
                                                        borderRadius: '8px', // Đặt góc bo tròn 8px cho hình ảnh
                                                    }}
                                                />
                                                <div
                                                    className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <Link to={`/shop/shop_single/${product.idProduct}`}
                                                                className="btn btn-success text-white"

                                                            >
                                                                <i className="far fa-heart"/>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={`/shop/shop_single/${product.idProduct}`}
                                                                  className="btn btn-success text-white mt-2"

                                                            >
                                                                <i className="far fa-eye"/>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="btn btn-success text-white mt-2"
                                                                href="shop-single.html"
                                                            >
                                                                <i className="fas fa-cart-plus"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a className="h3 text-decoration-none">
                                                    {product.nameProduct}
                                                </a>
                                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                                    <li>Size: {product.size}</li>
                                                    <li className="pt-2">
                                                        <span
                                                            className="product-color-dot color-dot-red float-left rounded-circle ml-1"/>
                                                        <span
                                                            className="product-color-dot color-dot-blue float-left rounded-circle ml-1"/>
                                                        <span
                                                            className="product-color-dot color-dot-black float-left rounded-circle ml-1"/>
                                                        <span
                                                            className="product-color-dot color-dot-light float-left rounded-circle ml-1"/>
                                                        <span
                                                            className="product-color-dot color-dot-green float-left rounded-circle ml-1"/>
                                                    </li>
                                                </ul>
                                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                                    <li>
                                                        <i className="text-warning fa fa-star"/>
                                                        <i className="text-warning fa fa-star"/>
                                                        <i className="text-warning fa fa-star"/>
                                                        <i className="text-muted fa fa-star"/>
                                                        <i className="text-muted fa fa-star"/>
                                                    </li>
                                                </ul>
                                                <p className="text-center mb-0">{new Intl.NumberFormat().format(
                                                    product.price)} VND</p>
                                                <button onClick={() => addToCart(product)} className="form-control bg-secondary">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                    {/* End Content */}
                    {/* Start Brands */}
                    <section className="bg-light py-5">
                        <div className="container my-4">
                            <div className="row text-center py-3">
                                <div className="col-lg-6 m-auto">
                                    <h1 className="h1">Our Brands</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="col-lg-9 m-auto tempaltemo-carousel">
                                    <div className="row d-flex flex-row">
                                        {/*Controls*/}
                                        <div className="col-1 align-self-center">
                                            <a
                                                className="h1"
                                                href="#multi-item-example"
                                                role="button"
                                                data-bs-slide="prev"
                                            >
                                                <i className="text-light fas fa-chevron-left"/>
                                            </a>
                                        </div>
                                        {/*End Controls*/}
                                        {/*Carousel Wrapper*/}
                                        <div className="col">
                                            <div
                                                className="carousel slide carousel-multi-item pt-2 pt-md-0"
                                                id="multi-item-example"
                                                data-bs-ride="carousel"
                                            >
                                                {/*Slides*/}
                                                <div
                                                    className="carousel-inner product-links-wap"
                                                    role="listbox"
                                                >
                                                    {/*First slide*/}
                                                    <div className="carousel-item active">
                                                        <div className="row">
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_01.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_02.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_03.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_04.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*End First slide*/}
                                                    {/*Second slide*/}
                                                    <div className="carousel-item">
                                                        <div className="row">
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_01.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_02.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_03.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_04.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*End Second slide*/}
                                                    {/*Third slide*/}
                                                    <div className="carousel-item">
                                                        <div className="row">
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_01.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_02.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_03.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-3 p-md-5">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid brand-img"
                                                                        src="../assets/img/brand_04.png"
                                                                        alt="Brand Logo"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*End Third slide*/}
                                                </div>
                                                {/*End Slides*/}
                                            </div>
                                        </div>
                                        {/*End Carousel Wrapper*/}
                                        {/*Controls*/}
                                        <div className="col-1 align-self-center">
                                            <a
                                                className="h1"
                                                href="#multi-item-example"
                                                role="button"
                                                data-bs-slide="next"
                                            >
                                                <i className="text-light fas fa-chevron-right"/>
                                            </a>
                                        </div>
                                        {/*End Controls*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*End Brands*/}
                    {/* Start Footer */}

                </div>
            </>

        </>
    )
}