import React, {useEffect, useRef, useState} from "react";
import Header from "./header";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products/products";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/css/App.css'
import AboutUs from "../pages/about-us";
import SeasonalPlants from "../pages/products/seasonal-plants";
import LivePlants from "../pages/products/live-plants";
import Seeds from "../pages/products/seeds";
import Tools from "../pages/products/tools";

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
                <Route path="/seasonal-variety" element={<SeasonalPlants/>}/>
                <Route path="/live-plants" element={<LivePlants/>}/>
                <Route path="/pots-tools" element={<Tools/>}/>
                <Route path="/seeds" element={<Seeds/>}/>

                <Route path="/About-Us" element={<AboutUs/>}/>

                {/*<Route path="*" element={<NoPage />} />*/}
            </Routes>
            </div>
            <Footer/>
        </div>
    )


}

export default Fulllayout;



