import React, {useEffect, useRef, useState} from "react";
import Header from "./header";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/css/App.css'
import AboutUs from "../pages/about-us";

function Fulllayout() {

    const [isLoaded, set_isLoaded] = useState(false);


    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {


    return (
        <div>
            <Header/>
            <div className={'body_view container-fluid'}>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/About-Us" element={<AboutUs/>}/>

                {/*<Route path="*" element={<NoPage />} />*/}
            </Routes>
            </div>
            <Footer/>
        </div>
    )


}

export default Fulllayout;



