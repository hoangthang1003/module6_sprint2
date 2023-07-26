import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {handleCallApiLogIn, handleCallApiToCreateAccountFb} from "../service/Login";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import { toast } from 'react-toastify';
import {receiveAccount} from "../redux/action";


export function Login() {
    const [failedAccount, setFailedAccount] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [accountFacebook, setAccountFacebook] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Kiểm tra nếu đã đăng nhập (ví dụ, token đã tồn tại trong localStorage), thực hiện chuyển hướng tới trang home
        const token = localStorage.getItem("token");

        // Nếu token đã tồn tại, thực hiện chuyển hướng tới trang home
        if (token) {
            navigate("/");
        }
    }, [navigate]);
    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center text-dark mt-5">ĐĂNG NHẬP</h2>
                        <div className="card my-5">
                            <Formik
                                initialValues={{
                                    username: "",
                                    password: "",
                                }}
                                validationSchema={Yup.object({
                                    username: Yup.string()
                                        .required("Tên đăng nhập bắt buộc phải nhập.")
                                        .test(
                                            "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
                                            "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
                                            function (value) {
                                                return value.length >= 6 && value.length <= 30;
                                            }
                                        ),
                                    password: Yup.string()
                                        .required("Mật khẩu bắt buộc phải nhập.")
                                        .test(
                                            "Mật khẩu bắt buộc từ 6-30 ký tự.",
                                            "Mật khẩu bắt buộc từ 6-30 ký tự.",
                                            function (value) {
                                                return value.length >= 6 && value.length <= 30;
                                            }
                                        ),
                                })}
                                onSubmit={(values) => {
                                    handleCallApiLogIn(values)
                                        .then((e) => {
                                            console.log(e);
                                            setFailedAccount(null);
                                            localStorage.setItem("token", e.token);
                                            localStorage.setItem("username", e.username);
                                            localStorage.setItem("account", JSON.stringify(e));
                                            dispatch(receiveAccount(e));
                                            window.location.href = "/";
                                        })
                                        .catch((e) => {
                                            setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
                                        });
                                }}
                            >
                                <Form className="card-body cardbody-color p-lg-5">
                                    <div className="text-center">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                                            className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                            width="200px"
                                            alt="profile"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            aria-describedby="emailHelp"
                                            placeholder="Nhập tài khoản"

                                        />
                                        <td>
                                            <ErrorMessage
                                                name="username"
                                                className="error-mess m-0"
                                                component={"p"}
                                            />
                                            {failedAccount && (
                                                <p className="error-mess m-0">{failedAccount}</p>
                                            )}
                                        </td>
                                    </div>
                                    <div className="mb-3">
                                        <Field
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Nhập mật khẩu"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                                            Đăng nhập
                                        </button>

                                    </div>
                                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                        Chưa đăng ký?{" "}
                                        <Link to="/signup" className="text-dark fw-bold">
                                            {" "}
                                            Thêm mới tài khoản
                                        </Link>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}