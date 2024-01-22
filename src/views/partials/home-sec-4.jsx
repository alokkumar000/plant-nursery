
import React, {useEffect, useRef, useState} from "react";
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";



function HomeSectionFour() {

    const [isLoaded, set_isLoaded] = useState(false);








    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {




    return (
        <div>
            <Row>
                <Col md={3}>
                    <Card className={'product_card mb-3'}>
                        <div className={'img_trim'}>
                            <img
                                alt="Sample" className={'product_image img-fluid'   }
                                // src={plant.plantImage}
                            />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Live Plants


                            </CardTitle>


                        </CardBody>

                    </Card>
                </Col>

            </Row>
        </div>
    )



}

export default HomeSectionFour;



