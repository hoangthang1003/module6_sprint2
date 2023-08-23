import React, {useContext, useEffect, useState} from "react";
import {findByName, findProductType, getAllProductByType, productService} from "../service/ProductService";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import {ValueIconCartContext} from "./ValueIconCartContext";
import Swal from "sweetalert2";
import {addCart, findCartByCustomerId} from "../service/CartService";
import {Form, Field, Formik} from "formik";

export const Shop = () => {
    const [carts, setCarts] = useState([]);
    const token = localStorage.getItem("token");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const pageSize = 10;
    const [productList, setProductList] = useState([]);
    const [productType, setProductType] = useState([]);
    const {setIconQuantity} = useContext(ValueIconCartContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchData(currentPage);
        findAllCart();
        showProductType();


    }, [currentPage]);


    const fetchData = async (page) => {
        try {
            const result = await productService.findAll(page, pageSize);
            setTotalPage(result.totalPages);

            // Sắp xếp danh sách sản phẩm theo ngày tạo mới nhất
            const sortedProductList = result.content.sort((a, b) => {
                return new Date(b.creationDate) - new Date(a.creationDate);
            });

            setProductList(sortedProductList);
        } catch (error) {
            console.log(error);
        }
    };


    const showProductType = async () => {
        const rs = await findProductType();
        setProductType(rs);
    };

    const handleDisplayByType = async (type) => {
        const res = await getAllProductByType(type);
        setProductList(res);
        setCurrentPage(0);
    };

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


    const AddCart = async (idProduct, productQuantity) => {
        const cart = {
            product: idProduct,
            quantity: quantity,
            status: true,
        };
        try {
            if (!token) {
                await Swal.fire({
                    title: 'Thông báo',
                    text: 'Bạn cần đăng nhập để tiếp tục mua sắm.',
                    icon: 'info',
                    confirmButtonText: 'OK',
                });
                return;
            } else if (productQuantity < carts.quantity - 1) {
                await Swal.fire({
                    title: 'Cảnh báo',
                    text: 'Số lượng sản phẩm trong kho không đủ!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
                return;
            }
            await addCart(cart, token);
            await setQuantity(quantity + 1);
        } catch (err) {
            console.log(err);
        }
    };


    function handleClickPage(page) {
        setCurrentPage(page.selected);
    }

    function handleChangePage(pageable) {
        if (currentPage + 1 === totalPage && pageable.isNext === true) return false;
        let newCurrentPage = pageable.isNext ? currentPage + 1 : currentPage - 1;
        newCurrentPage = Math.max(0, Math.min(newCurrentPage, totalPage - 1));
        setCurrentPage(newCurrentPage);
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
                            <div className="button-container">
                                {productType.map((value, index) => {
                                    return (
                                        <div key={index} className="m-3">
                                            <button className="btn btn-outline-secondary m-3"
                                                    onClick={() => handleDisplayByType(value.idType)}
                                                    style={{
                                                        background: "none",
                                                        transition: "background-color 0.3s ease-in-out"
                                                    }}>
                                                {value.nameType}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Formik
                                initialValues={{nameProduct: ""}}
                                onSubmit={async (values) => {
                                    const res = await findByName(values.nameProduct)
                                    if (res.length === 0) {
                                        alert("khong thay");
                                    } else {
                                        setProductList(res.content);
                                        fetchData()
                                    }
                                }}
                            >
                                <Form className="d-flex align-items-center mb-5">
                                    <Field
                                        type="text"
                                        name="nameProduct"
                                        id="nameProduct"
                                        className="form-control "
                                        style={{marginLeft: "400px"}}
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                    <button type="submit" className="btn btn-info ml-2">
                                        <i className="bi bi-search"></i></button>
                                </Form>

                            </Formik>
                            <div className="row">
                                {productList.map((product) => (
                                    <div className="col-md-4" key={product.idProduct}>
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
                                                            <button className="btn btn-success mr-2 mt-2"
                                                                    onClick={() => AddCart(product?.idProduct, product?.quantity)}>
                                                                <i className="fas fa-cart-plus"/>
                                                            </button>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a className="h3 text-decoration-none">
                                                    {product.nameProduct}
                                                </a>
                                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
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
                                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                                    <li>Số lượng: {product.quantity}</li>
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
                                            </div>
                                            <div className="product-action">

                                            </div>

                                        </div>
                                    </div>
                                ))}
                                {totalPage > 0 && (
                                    <div className=" d-flex justify-content-center">
                                        <ReactPaginate
                                            previousLabel="Trước"
                                            nextLabel="Sau"
                                            pageCount={totalPage}
                                            onPageChange={handleClickPage}
                                            onClick={handleChangePage}
                                            containerClassName="pagination"
                                            previousClassName="page-item"
                                            previousLinkClassName="page-link"
                                            nextClassName="page-item"
                                            nextLinkClassName="page-link"
                                            pageClassName="page-item"
                                            pageLinkClassName="page-link"
                                            activeClassName="active"
                                            activeLinkClassName="page-link"
                                            forcePage={currentPage}
                                            pageRangeDisplayed={2} // Hiển thị 3 trang trên mỗi lần render
                                            marginPagesDisplayed={1} // Hiển thị 1 trang ở đầu và cuối danh sách trang
                                        /></div>)}
                            </div>
                        </div>
                    </div>


                    {/* End Content */}
                    {/* Start Brands */}
                    <section className="bg-light py-5">
                        <div className="container my-4">
                            <div className="row text-center py-3">
                                <div className="col-lg-6 m-auto">
                                    <h1 className="h1">Hãng</h1>
                                    <p>
                                        Thời trang chính hãng đến từ ý,không chỉ đẹp mà còn chất
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