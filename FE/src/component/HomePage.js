import React from "react";

export function HomePage() {
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
                                <label htmlFor="inputModalSearch"/>
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
                {/* Start Banner Hero */}
                <div
                    id="carouselExampleControlsNoTouching"
                    className="carousel slide"
                    data-bs-touch="false"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_1.jpg?1673312669282"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_2.jpg?1673312669282"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_3.jpg?1673312669282"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControlsNoTouching"
                        data-bs-slide="prev"
                    >
      <span className="carousel-control-prev-icon" aria-hidden="true">
        <span className="visually-hidden">Previous</span>
      </span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControlsNoTouching"
                        data-bs-slide="next"
                    >
      <span className="carousel-control-next-icon" aria-hidden="true">
        <span className="visually-hidden">Next</span>
      </span>
                    </button>
                </div>
                {/*<div className="row row-small row-full-width mt-3 ">*/}
                {/*    <div className="col medium-6 small-12 large-6">*/}
                {/*        <div className="col-inner">*/}
                {/*            <div className="box has-hover has-hover box-text-bottom">*/}
                {/*                <div className="box-image">*/}
                {/*                    <a*/}
                {/*                        href="https://deltasport.vn/danh-muc/san-pham-nam/"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noopener noreferrer"*/}
                {/*                    >*/}
                {/*                        <div className="box-image">*/}
                {/*                            <img*/}
                {/*                                width={600}*/}
                {/*                                height="50%"*/}
                {/*                                style={{marginLeft: 20}}*/}
                {/*                                src="https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nam-1.jpg.webp"*/}
                {/*                                className="attachment- size-"*/}
                {/*                                alt=""*/}
                {/*                                decoding="async"*/}
                {/*                                loading="lazy"*/}
                {/*                                srcSet="https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nam-1.jpg.webp 1000w, https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nam-1-300x200.jpg.webp 300w, https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nam-1-900x600.jpg.webp 900w, https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nam-1-768x512.jpg.webp 768w, https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nam-1-510x340.jpg.webp 510w"*/}
                {/*                                sizes="(max-width: 1000px) 100vw, 1000px"*/}
                {/*                            />*/}
                {/*                        </div>*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*                <div className="box-text text-center">*/}
                {/*                    <div className="box-text-inner">*/}
                {/*                        <h4>Nam</h4>*/}
                {/*                        <p className="summary___3soIS gl-body">*/}
                {/*                            Khám phá trang phục thể thao Nam hàng đầu Việt Nam dành cho*/}
                {/*                            Lifewear, Chạy bộ, Gym, Yoga, Tennis, Cầu lông*/}
                {/*                        </p>*/}
                {/*                        <a*/}
                {/*                            rel="noopener noreferrer"*/}
                {/*                            href="http://localhost:63343/demo2/src/prototype/shop.html"*/}
                {/*                            target="_blank"*/}
                {/*                            className="button white is-white is-medium"*/}
                {/*                        >*/}
                {/*                            <span>Xem thêm</span>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col medium-6 small-12 large-6 ">*/}
                {/*        <div className="col-inner">*/}
                {/*            <div className="box has-hover has-hover box-text-bottom">*/}
                {/*                <div className="box-image">*/}
                {/*                    <a*/}
                {/*                        href="http://localhost:63343/demo2/src/prototype/shop.html"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noopener noreferrer"*/}
                {/*                    >*/}
                {/*                        <div className="box-image">*/}
                {/*                            <img*/}
                {/*                                width={600}*/}
                {/*                                height="50%"*/}
                {/*                                src="https://deltasport.vn/wp-content/uploads/2023/05/SS23_banner_nu-1.jpg.webp"*/}
                {/*                                className="attachment- size-"*/}
                {/*                                alt=""*/}
                {/*                                decoding="async"*/}
                {/*                                loading="lazy"*/}
                {/*                                sizes="(max-width: 1000px) 100vw, 1000px"*/}
                {/*                            />*/}
                {/*                        </div>*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*                <div className="box-text text-center">*/}
                {/*                    <div className="box-text-inner">*/}
                {/*                        <h4>NỮ</h4>*/}
                {/*                        <p className="summary___3soIS gl-body">*/}
                {/*                            Khám phá trang phục thể thao Nam hàng đầu Việt Nam dành cho*/}
                {/*                            Lifewear, Chạy bộ, Gym, Yoga, Tennis, Cầu lông*/}
                {/*                        </p>*/}
                {/*                        <a*/}
                {/*                            rel="noopener noreferrer"*/}
                {/*                            target="_blank"*/}
                {/*                            className="button white is-white is-medium"*/}
                {/*                        >*/}
                {/*                            <span>Xem thêm</span>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <section className="container py-5">
                    <div className="row text-center pt-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Các mục chính</h1>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 p-5 mt-3">
                            <a href="#">
                                <img
                                    src="https://luvinus.com/wp-content/uploads/2019/09/cach-phoi-do-voi-giay-the-thao-nam-7.jpg"
                                    className="rounded-circle rounded-circle1 img-fluid border"
                                />
                            </a>
                            <h5 className="text-center mt-3 mb-3">Nam</h5>
                            <p className="text-center">
                                <a className="btn btn-success">Go Shop</a>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 p-5 mt-3">
                            <a href="#">
                                <img
                                    src="https://kenh14cdn.com/2018/3/19/tt3-1521454134477755489291.jpeg"
                                    className="rounded-circle img-fluid border"
                                />
                            </a>
                            <h2 className="h5 text-center mt-3 mb-3">Nữ</h2>
                            <p className="text-center">
                                <a className="btn btn-success">Go Shop</a>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 p-5 mt-3">
                            <a href="#">
                                <img
                                    src="https://cf.shopee.vn/file/a9627c2c8259d882ebe08d00c5beaa87"
                                    className="rounded-circle img-fluid  border"
                                />
                            </a>
                            <h2 className="h5 text-center mt-3 mb-3">Giày</h2>
                            <p className="text-center">
                                <a className="btn btn-success">Go Shop</a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-light">
                    <div className="container py-5">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">Sản phẩm nổi bật</h1>
                                <p>Những dòng sản phẩm đang HOT tại shop</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card h-100">
                                    <a href="shop-single.html">
                                        <img
                                            src="https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            className="card-img-top"
                                            alt="..."
                                            width="40%"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-muted fa fa-star"/>
                                                <i className="text-muted fa fa-star"/>
                                            </li>
                                            <li className="text-muted text-right">$240.00</li>
                                        </ul>
                                        <a
                                            href="shop-single.html"
                                            className="h2 text-decoration-none text-dark"
                                        >
                                            Áo bóng chuyền xanh
                                        </a>
                                        <p className="card-text">
                                            Áo Thun Tay Ngắn Hóa Trang Nhân Vật Anime cosplay Haikyuu Kiểu
                                            Dáng Thời Trang{" "}
                                        </p>
                                        <p className="text-muted">Reviews (24)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card h-100">
                                    <a href="shop-single.html">
                                        <img
                                            src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </a>
                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-muted fa fa-star"/>
                                                <i className="text-muted fa fa-star"/>
                                            </li>
                                            <li className="text-muted text-right">$480.00</li>
                                        </ul>
                                        <a
                                            href="shop-single.html"
                                            className="h2 text-decoration-none text-dark"
                                        >
                                            GIÀY THỂ THAO NAM SHRYSS
                                        </a>
                                        <p className="card-text">
                                            BIG SIZE NGOẠI CỠ GIÀY DÉP NAM CHẤT LIỆU G04 SẢN PHẨM MỚI{" "}
                                        </p>
                                        <p className="text-muted">Reviews (48)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card h-100">
                                    <a href="shop-single.html">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2016/12/25/15/41/ball-1930191_1280.jpg"
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </a>
                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                                <i className="text-warning fa fa-star"/>
                                            </li>
                                            <li className="text-muted text-right">$360.00</li>
                                        </ul>
                                        <a
                                            href="shop-single.html"
                                            className="h2 text-decoration-none text-dark"
                                        >
                                            Bóng chuyền da MIKASA
                                        </a>
                                        <p className="card-text">Làm từ da xịn,chất liệu êm</p>
                                        <p className="text-muted">Reviews (74)</p>
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