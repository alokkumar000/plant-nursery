
import React, {useEffect, useRef, useState} from "react";
import callus from "../assets/Image/callus.jpg";
import {Col, Row} from "reactstrap";


function AboutUs() {

    const [isLoaded, set_isLoaded] = useState(false);








    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {




    return (
        <div className={'container py-5 '}>
            <Row>
                <Col md={6}>
                    <div className={'contact_us'}>
                        Contact Us
                    </div>
                    <div className={'contact_us_sub mt-5'}>
                        We are here to help and answer any question you might have.
                    </div>
                    <div className={'contact_us_sub'}>
                        We look forward to hearing from you.
                    </div>
                    <div className={'contact_us_sub mt-4'}>
                        <div className={'contact_us_sub_header'}>
                            Mail us at
                        </div>
                        <div className={'contact_us_sub_text'}>
                            Contact us at
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <img className={'img-fluid'} src={callus}/>
                </Col>
            </Row>


        </div>
    )



}

export default AboutUs;



