import './App.css';
import React from "react";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {HomePage} from "./component/HomePage";
import {Route, Routes} from "react-router";
import {Shop} from "./component/shop";
import {ShopSingle} from "./component/shop_single";
import {Login} from "./component/Login";
import "../src/css/login.css"
import {ShopDetail} from "./component/shop-context";
import {SignUp} from "./component/SignUp";

function App() {
  return (
 <>
  <Header/>

         {/*<div className="App">*/}
         {/*    <h1>Shopping App</h1>*/}
         {/*    <ShopDetail />*/}
         {/*</div>*/}
     <Routes>
         <Route path={"/"} element={<HomePage />}/>
         <Route path={"/shop"} element={<Shop />} />
         <Route path={"/shop/shop_single/:id"} element={<ShopSingle />} />
         <Route path={"/login"} element={<Login />} />
         <Route path={"/signup"} element={<SignUp />} />

         <Route path={"/shop-detail"} element={<ShopDetail />} />
     </Routes>

  <Footer />
 </>
  );
}

export default App;
