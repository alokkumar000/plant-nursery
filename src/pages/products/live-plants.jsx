import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "reactstrap";
import seed from "../../assets/Image/seeds.jpg";
import {supabase} from "../../components/appUtill";
import SingleProductModal from "../../views/partials/single-product-modal";
import {Animated} from "react-animated-css";
import _ from "lodash";

function LivePlants() {

    const [isLoaded, set_isLoaded] = useState(false);
    const [plants, set_plants] = useState([]);
    const [seasonalPlants, set_seasonalPlants] = useState([]);


    function getClassContainer() {
        if (window.location.href.includes('products')) {
            return ''
        } else {
            return 'container py-4'
        }
    }


    const getPlants = async () => {
        try {
            const {data, error} = await supabase
                .from('products')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('Fetched data:', data);

                set_plants(data);

                // Utilize the fetched data in your component
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    console.log('plants', plants);


    useEffect(() => {
        getPlants();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let livePants = plants.filter(plant => plant.PlantType === 'plant');
        set_seasonalPlants(livePants);
    }, [plants]);

    if (!_.isEmpty(plants)) {
        return (
            <div className={getClassContainer()}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <h1 className={'text_green mb-3'}>Live Plants</h1>
                </Animated>
                <Row>
                    {plants.map((plant) => (


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
                                            src={seed}
                                        />
                                    </div>
                                    <SingleProductModal plant={plant}/>

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

export default LivePlants;



