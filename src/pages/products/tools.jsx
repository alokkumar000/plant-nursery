import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "reactstrap";
import {supabase} from "../../components/appUtill";
import SingleProductModal from "../../views/partials/single-product-modal";
import _ from "lodash";
import {Animated} from "react-animated-css";


function Tools() {

    const [isLoaded, set_isLoaded] = useState(false);
    const [tools, set_tools] = useState([]);


    function getClassContainer() {
        if (window.location.href.includes('products')) {
            return ''
        } else {
            return 'container py-4'
        }
    }


    const getTools = async () => {
        try {
            const {data, error} = await supabase
                .from('tools')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('Fetched data:', data);

                set_tools(data);

                // Utilize the fetched data in your component
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    console.log('tools', tools);


    useEffect(() => {
        getTools();
        window.scrollTo(0, 0);
    }, []);

    if (!_.isEmpty(tools)) {
        return (
            <div className={getClassContainer()}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <h1 className={'text_green mb-3'}>Pots & Tools</h1>
                </Animated>
                <Row>
                    {tools.map((tool) => (
                        <Col md={3}>
                            <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                                <Card className={'sec_3_card mb-3'}>
                                    <div className={'sec_4_cardimg_trim'}>
                                        {/* <LazyLoadImage
                                        alt={image.alt}
                                        height={image.height}
                                        src={image.src} // use normal <img> attributes as props
                                        width={image.width} />*/}
                                        <img
                                            alt="Sample" className={'product_image img-fluid'}
                                            src={tool.image}
                                        />
                                    </div>
                                    <SingleProductModal plant={tool}/>

                                </Card>
                                {/*=========================contact modal=================================*/}

                            </Animated>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

}

export default Tools;



