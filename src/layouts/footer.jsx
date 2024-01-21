import React, {useState} from 'react';

import '../assets/css/App.css';
import {Navbar, NavbarBrand, NavbarText} from "reactstrap";
import footerlogo from "../assets/Image/footer-logo.png";


function Footer() {


    const getCurYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div>

            <div className=" site_footer  text-center mt-4"> &copy; | {getCurYear()} <img height={15} src={footerlogo}/>
            </div>

        </div>
    )


}

export default Footer;


