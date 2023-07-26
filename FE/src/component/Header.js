import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ValueIconCartContext} from "./ValueIconCartContext";
import Avatar from "@mui/material/Avatar";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from 'react-icons/fa'; // 'fa' là mã của bộ biểu tượng FontAwesome


export const Header = () => {
    const username = localStorage.getItem("username");
    const account = JSON.parse(localStorage.getItem("account"));
    const roles = [];
    if (account != null) {
        for (let i = 0; i < account.roles.length; i++) {
            roles.push(account.roles[i].authority);
        }
    }
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };
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
                                            <Link to='/' className="nav-link">
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/shop' className="nav-link">
                                                Shop
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link">
                                                Địa điểm
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link">
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
                                    <div className="nav-item">
                                        {username ? (
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant="transparent"
                                                    className="d-flex justify-content-center align-items-center border-0"
                                                >
                                                    <Avatar>{username[0].toUpperCase()}</Avatar>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {roles.includes("ADMIN") ? (
                                                        <Dropdown.Item
                                                            to="/admin/employee/list"
                                                            className="text-decoration-none"
                                                        >
                                                            <Link
                                                                to="/admin/employee/list"
                                                                className="text-dark text-decoration-none"
                                                            >
                                                                Quản lý nhân viên
                                                            </Link>
                                                        </Dropdown.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {roles.includes("ADMIN") ? (
                                                        <Dropdown.Item className="text-decoration-none">
                                                            <Link
                                                                to={"/admin/iphone/list"}
                                                                className="text-dark text-decoration-none"
                                                            >
                                                                Quản lý sản phẩm
                                                            </Link>
                                                        </Dropdown.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {roles.includes("ADMIN") ? (
                                                        <Dropdown.Item className="text-decoration-none">
                                                            <Link
                                                                className="text-dark text-decoration-none"
                                                                to={"/admin/customer/list"}
                                                            >
                                                                Quản lý khách hàng
                                                            </Link>
                                                        </Dropdown.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {roles.includes("USER") ? (
                                                        <Dropdown.Item className="text-decoration-none">
                                                            <Link
                                                                to={"/employee/ticket/list"}
                                                                className="text-dark text-decoration-none"
                                                            >
                                                                Quản lý tài khoản
                                                            </Link>
                                                        </Dropdown.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {roles.includes("USER") ? (
                                                        <Dropdown.Item className="text-decoration-none">
                                                            <Link
                                                                to={"/employee/ticket/list"}
                                                                className="text-dark text-decoration-none"
                                                            >
                                                                Lịch sử mua hàng
                                                            </Link>
                                                        </Dropdown.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {roles.includes("ADMIN") ? (
                                                        <Dropdown.Item className="text-decoration-none">
                                                            <Link
                                                                to={"/admin/statistic-film"}
                                                                className="text-dark text-decoration-none"
                                                            >
                                                                Thống kê
                                                            </Link>
                                                        </Dropdown.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {roles.includes("ADMIN")? (
                                                        <Dropdown.Divider/>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <Dropdown.Item
                                                        onClick={handleLogout}
                                                        className="text-decoration-none"
                                                    >
                                                        Đăng xuất
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        ) : (
                                            <Link to="/login" className="nav-link px-2 login-btn text-decoration-none" nav-link
                                                  link-dark px-2>
                                                <i className="fa-duotone fa-user"/>
                                            </Link>
                                        )}
                                    </div>

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
                                        <i className="fa-solid fa-user"></i>
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