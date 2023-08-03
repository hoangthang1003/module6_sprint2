import React, {useContext, useEffect, useState} from "react";
import {findProductType, getAllProductByType, productService} from "../service/ProductService";
import ReactPaginate from "react-paginate";
import {Product} from "./products";

export const Shop = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const pageSize = 10;
    const [productList, setProductList] = useState(null);
    const [productType, setProductType] = useState([])

    const getList = async () => {
        const listCustomer = await productService.findAll(
            currentPage,
            pageSize
        );
        setTotalPage(listCustomer.totalPages);
        setProductList(listCustomer.content);
    };
    useEffect(() => {
        const showProductType = async () => {
            const rs = await findProductType();
            setProductType(rs)
        }
        showProductType()
    }, []);

    function handleClickPage(page) {
        setCurrentPage(page.selected);
    }

    function handleChangePage(pageable) {
        if (currentPage + 1 === totalPage && pageable.isNext === true) return false;
        let newCurrentPage = pageable.isNext ? currentPage + 1 : currentPage - 1;
        newCurrentPage = Math.max(0, Math.min(newCurrentPage, totalPage - 1));
        setCurrentPage(newCurrentPage);
    }


        // const handleGetProduct = (gender) => {
        //     const res = productService.findAllByGender(gender)
        //     setProductList(res.conte)
        // }
        // useEffect(()=>{
        //     handleGetProduct()
        // },[])


    const handleDisplayByType = async (type) => {
        const res = await getAllProductByType(type);
        setProductList(res);
        setCurrentPage(0);
    };

    // useEffect(() => {
    //     fetchData(0);
    // }, []);

    useEffect(() => {

        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page) => {
        try {
            const result = await getList(page);
            setTotalPage(result.totalPages);
            setProductList(result.content);
        } catch (error) {
            console.log(error);
        }
    };

    if (!productList) {
        // Chưa có dữ liệu productList, hiển thị nội dung loading hoặc thông báo tải dữ liệu
        return <div>Loading...</div>;
    }

    console.log(productList);
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
                                                    style={{background: "none"}}>
                                                {value.nameType}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div>
                                {productType.map((value) => {
                                    return (
                                        <button className="btn btn-outline-secondary m-3"
                                                onClick={() => handleDisplayByType(value.idType)}
                                                style={{background: "none"}}>
                                            {value.nameType}
                                        </button>
                                    );
                                })}
                                <div className="col-md-6 pb-4">
                                    <div className="d-flex">
                                        <select className="form-control">
                                            <option>Nổi bật</option>
                                            <option>Từ A-Z</option>
                                            <option>Giảm giá</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {productList.map((product) => (
                                    <Product data={product}/>
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
                                    <h1 className="h1">Our Brands</h1>
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