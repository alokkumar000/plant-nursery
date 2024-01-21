import React, {useEffect, useRef, useState} from "react";
import logo from '../assets/Image/nursery-logo.jpg';
import {Navbar, NavbarBrand, NavbarText} from "reactstrap";
import {Link} from "react-router-dom";


function Header() {

    const [isLoaded, set_isLoaded] = useState(false);


    return (
        <div>
            <Navbar className={"nav_bar"}>
                <NavbarBrand href="/">
                    <img className="nav_logo" src={logo}/>
                </NavbarBrand>
                <div className="me-right">
                    <NavbarText className={'me-2'}><Link to={'/'}>Home</Link></NavbarText>
                    <NavbarText className={'me-2'}><Link to={'/products'}>Our Products</Link></NavbarText>
                    <NavbarText className={'me-2'}><Link to={'/about-us'}>About Us</Link></NavbarText>

                </div>
            </Navbar>


        </div>
    )


}

export default Header;


