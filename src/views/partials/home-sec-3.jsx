import React, {useEffect, useRef, useState} from "react";
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import livePlant from  "../../assets/Image/live-plants.jpg"
import potTools from  "../../assets/Image/pots & tools.jpg"

function HomeSectionThree() {

    const [isLoaded, set_isLoaded] = useState(false);


    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {


    return (
        <div>

            <Row>
                <Col md={3}>
                    <Card className={'sec_3_card mb-3'}>
                        <div className={'sec_3_cardimg_trim'}>
                            <img
                                alt="Sample" className={'product_image img-fluid'}
                                src={livePlant}
                            />
                        </div>
                        <CardBody className={'sec_3_cardbody'}>
                            <CardTitle tag="h5" className={'d-flex px-2'}>
                                <div> Live Plants</div>
                                <div className={'ms-auto'}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </CardTitle>
                        </CardBody>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={'sec_3_card mb-3'}>
                        <div className={'sec_3_cardimg_trim'}>
                            <img
                                alt="Sample" className={'product_image img-fluid'}
                                // src={potTools}
                            />
                        </div>
                        <CardBody className={'sec_3_cardbody '}>
                            <CardTitle tag="h5" className={'d-flex px-2'}>
                                <div>  Plant Seeds</div>
                                <div className={'ms-auto'}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </CardTitle>
                        </CardBody>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={'sec_3_card mb-3'}>
                        <div className={'sec_3_cardimg_trim'}>
                            <img
                                alt="Sample" className={'product_image img-fluid'}
                                // src={plant.plantImage}
                            />
                        </div>
                        <CardBody className={'sec_3_cardbody'}>
                            <CardTitle tag="h5" className={'d-flex px-2'}>
                                <div>Seasonal Variety</div>
                                <div className={'ms-auto'}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </CardTitle>
                        </CardBody>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card className={'sec_3_card mb-3'}>
                        <div className={'isec_3_cardimg_trim'}>
                            <img
                                alt="Sample" className={'product_image img-fluid'}
                                src={potTools}
                            />
                        </div>
                        <CardBody className={'sec_3_cardbody'}>
                            <CardTitle tag="h5" className={'d-flex px-2'}>
                                <div> Pots & Tools</div>
                                <div className={'ms-auto'}>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </CardTitle>
                        </CardBody>

                    </Card>
                </Col>
            </Row>


        </div>
    )


}

export default HomeSectionThree;



