import React, {useEffect, useRef, useState} from "react";
import {Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import LoaderSpinner from "../components/utils/loader-spinner";
import _ from "lodash";
import {supabase} from "../components/appUtill";
import HomeCarousel from "../views/partials/home-carousel";
import SingleProductModal from "../views/partials/single-product-modal";
import HomeSectionThree from "../views/partials/home-sec-3";
import HomeSectionFour from "../views/partials/home-sec-4";
import {Animated} from "react-animated-css";


function Home() {

    const [isLoaded, set_isLoaded] = useState(false);


    return (
        <div>
            <HomeCarousel/>


            <div className={'container my-5 text-center sec_2'}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <h1>
                        <div> We make products that help you</div>
                        <div>
                            upgrade your gardening experience.
                        </div>
                    </h1>
                </Animated>
            </div>

            <div className={'container sec_3 my-5'}>
                <HomeSectionThree/>
            </div>

            <div className={'container my-5 sec_4'}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <div className={'sec_4_header mb-3'}>New Arrivals</div>
                </Animated>
                <HomeSectionFour/>
            </div>
        </div>
    )


}

export default Home;



