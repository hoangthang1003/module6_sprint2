import React from "react";
import {Link} from "react-router-dom";


export function Header() {
    return (
        <>
            <>

                <>
                    <div>
                        <div
                            className="d-flex justify-content-center bg-dark mt-1 mb-1"
                            style={{color: "white"}}
                        >
                            Miễn phí vận chuyển toàn quốc với tất cả{" "}
                            <b style={{color: "red"}}> hóa đơn </b> trên 500K
                        </div>
                    </div>
                    <nav
                        className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
                        id="templatemo_nav_top"
                    >
                        <div className="container text-light">
                            <div className="w-100 d-flex justify-content-between">
                                <div>
                                    <i className="fa fa-envelope mx-2"/>
                                    <a
                                        className="navbar-sm-brand text-light text-decoration-none"
                                        href="mailto:info@company.com"
                                    >
                                        SportSaga@company.com
                                    </a>
                                    <i className="fa fa-phone mx-2"/>
                                    <a
                                        className="navbar-sm-brand text-light text-decoration-none"
                                        href="tel:010-020-0340"
                                    >
                                        0-915-195-883
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-light"
                                        href="https://fb.com/templatemo"
                                        target="_blank"
                                        rel="sponsored"
                                    >
                                        <i className="fab fa-facebook-f fa-sm fa-fw me-2"/>
                                    </a>
                                    <a
                                        className="text-light"
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-instagram fa-sm fa-fw me-2"/>
                                    </a>
                                    <a
                                        className="text-light"
                                        href="https://twitter.com/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter fa-sm fa-fw me-2"/>
                                    </a>
                                    <a
                                        className="text-light"
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin fa-sm fa-fw"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Close Top Nav */}
                    {/* Header */}
                    <nav className="navbar navbar-expand-lg navbar-light shadow">
                        <div className="container d-flex justify-content-between align-items-center">
                            <Link to="/"
                                className="navbar-brand text-success logo h1 align-self-center"

                            >
                                Sport SAGA
                            </Link>
                            <button
                                className="navbar-toggler border-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#templatemo_main_nav"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div
                                className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                                id="templatemo_main_nav"
                            >
                                <div className="flex-fill">
                                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link" >
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/shop' className="nav-link" >
                                                Shop
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link" >
                                                Địa điểm
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link" >
                                                Tin tức
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar align-self-center d-flex">
                                    <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputMobileSearch"
                                                placeholder="Search ..."
                                            />
                                            <div className="input-group-text">
                                                <i className="fa fa-fw fa-search"/>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="nav-icon d-none d-lg-inline"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#templatemo_search"
                                    >
                                        <i className="fa fa-fw fa-search text-dark mr-2"/>
                                    </a>
                                    <Link to="/shop-detail"
                                        className="nav-icon position-relative text-decoration-none"
                                    >
                                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"/>
                                        <span
                                            className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                7
              </span>
                                    </Link>
                                    <a
                                        className="nav-icon position-relative text-decoration-none"
                                        href="login.html"
                                    >
                                        <i className="fa fa-fw fa-user text-dark mr-3"/>
                                        <span
                                            className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                +99
              </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
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
                </>


            </>

        </>
    )
}