import React, {useEffect, useRef, useState} from "react";
import logo from '../assets/Image/nursery-logo.jpg';
import {Navbar, NavbarBrand, NavbarText} from "reactstrap";
import {Link} from "react-router-dom";


function Header() {

    const [isLoaded, set_isLoaded] = useState(false);


    return (
        <div>
            <Navbar className={"nav_bar fixed-top  bg-light navbar-light mb-3"}>

                <NavbarBrand href="/" style={{marginLeft:'3%'}}>
                    <img className="nav_logo" src={logo}/>
                </NavbarBrand>
                <div className="me-right" style={{marginRight:'3%'}}>
                    <NavbarText className={'me-4'}><Link to={'/'}>Home</Link></NavbarText>
                    <NavbarText className={'me-4'}><Link to={'/products'}>Our Products</Link></NavbarText>
                    <NavbarText className={'me-4'}><Link to={'/about-us'}>About Us</Link></NavbarText>

                </div>

            </Navbar>


        </div>
    )


}

export default Header;



