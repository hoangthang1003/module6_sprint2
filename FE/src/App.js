import './App.css';
import React from "react";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {HomePage} from "./component/HomePage";
import {Route, Routes} from "react-router";
import {Shop} from "./component/shop";
import {Login} from "./component/Login";
import "../src/css/login.css"
import {SignUp} from "./component/SignUp";
import {Cart} from "./component/cart/Cart";
import {QuantityProvider,ValueIconCartContext } from "./component/ValueIconCartContext";
import {ShopSingle} from "./component/shop_single";
import {HistoryCart} from "./component/history/HistoryCart";
import {PaymentSuccess} from "./component/PaymentSuccess";

function App() {
    return (
        <>
            <QuantityProvider>
                <Header />
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/shop"} element={<Shop/>}/>
                    <Route path={"/shop/shop_single/:id"} element={<ShopSingle/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/order-detail/:totalPrice"} element={<PaymentSuccess/>}/>
                    <Route path={"/user/history"} element={<HistoryCart/>}/>


                </Routes>
                <Footer/>
            </QuantityProvider>
        </>
    );
}

export default App;
