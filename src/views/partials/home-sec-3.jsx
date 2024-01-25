import React, {useState} from "react";
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import livePlant from "../../assets/Image/live-plants.jpg"
import potTools from "../../assets/Image/pots & tools.jpg"
import seasonalVariety from "../../assets/Image/seasonal.jpg"
import seed from "../../assets/Image/seeds.jpg"
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";


function HomeSectionThree() {

    const [isLoaded, set_isLoaded] = useState(false);
    const curULR = window.location.href;


    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {


    return (
        <div>

            <Row>
                <Col md={3}>
                    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                        <Card className={'sec_3_card mb-3'}>
                            <div className={'sec_3_cardimg_trim'}>
                                <img
                                    alt="Sample" className={'product_image img-fluid'}
                                    src={livePlant}
                                />
                            </div>
                            <Link to={`${curULR}live-plants`}>
                                <CardBody className={'sec_3_cardbody fs-5'}>
                                    <CardTitle className={' px-2'}>
                                        <Row>
                                            <Col md={10} sm={10} xs={10}>
                                                <div>Live Plants</div>
                                            </Col>
                                            <Col md={2} sm={2} xs={2}>
                                                <div className={'text-end'}>
                                                    <i className="fa fa-chevron-right"></i>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Animated>
                </Col>
                <Col md={3}>
                    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                        <Card className={'sec_3_card mb-3'}>
                            <div className={'sec_3_cardimg_trim'}>
                                <img
                                    alt="Sample" className={'product_image img-fluid'}
                                    src={seed}
                                />
                            </div>
                            <Link to={`${curULR}seeds`}>
                                <CardBody className={'sec_3_cardbody fs-5'}>
                                    <CardTitle className={' px-2'}>
                                        <Row>
                                            <Col md={10} sm={10} xs={10}>
                                                <div>Plant Seed</div>
                                            </Col>
                                            <Col md={2} sm={2} xs={2}>
                                                <div className={'text-end'}>
                                                    <i className="fa fa-chevron-right"></i>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardTitle>
                                </CardBody>
                            </Link>


                        </Card>
                    </Animated>
                </Col>
                <Col md={3}>
                    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                        <Card className={'sec_3_card mb-3'}>
                            <div className={'sec_3_cardimg_trim'}>
                                <img
                                    alt="Sample" className={'product_image img-fluid'}
                                    src={seasonalVariety}
                                />
                            </div>
                            <Link to={`${curULR}seasonal-variety`}>
                                <CardBody className={'sec_3_cardbody fs-5'}>
                                    <CardTitle className={' px-2'}>
                                        <Row>
                                            <Col md={10} sm={10} xs={10}>
                                                <div>Seasonal Variety</div>
                                            </Col>
                                            <Col md={2} sm={2} xs={2}>
                                                <div className={'text-end'}>
                                                    <i className="fa fa-chevron-right"></i>
                                                </div>
                                            </Col>
                                        </Row>


                                    </CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Animated>
                </Col>
                <Col md={3}>
                    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                        <Card className={'sec_3_card mb-3'}>
                            <div className={'sec_3_cardimg_trim'}>
                                <img
                                    alt="Sample" className={'product_image img-fluid'}
                                    src={potTools}
                                />
                            </div>
                            <Link to={`${curULR}pots-tools`}>
                                <CardBody className={'sec_3_cardbody fs-5'}>
                                    <CardTitle className={' px-2'}>
                                        <Row>
                                            <Col md={10} sm={10} xs={10}>
                                                <div>Pots & Tools</div>
                                            </Col>
                                            <Col md={2} sm={2} xs={2}>
                                                <div className={'text-end'}>
                                                    <i className="fa fa-chevron-right"></i>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Animated>
                </Col>
            </Row>


        </div>
    )


}

export default HomeSectionThree;



