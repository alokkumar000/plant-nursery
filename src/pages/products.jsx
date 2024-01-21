import React, {useEffect, useRef, useState} from "react";
import {supabase} from "../components/appUtill";
import LoaderSpinner from "../components/utils/loader-spinner";
import _ from "lodash";
import {Button, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import SingleProductModal from "../views/partials/single-product-modal";


function Products() {

    const [isLoaded, set_isLoaded] = useState(false);
    const [plants, set_plants] = useState([]);

    useEffect(() => {
        getPlants();

    }, []);

    const getPlants = async () => {
        try {
            const {data, error} = await supabase
                .from('plant')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('Fetched data:', data);
                set_plants(data);
                set_isLoaded(true);
                // Utilize the fetched data in your component
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    if (!isLoaded) {
        return <div style={{marginTop: '5%'}}>
            <LoaderSpinner/>
        </div>
    } else {


        console.log(plants);


        return (
            <div className={'container'}>
                <h1>Products</h1>


                <Row>
                    {!_.isEmpty(plants) && plants.map((plant) => (

                        <Col key={plant.id} md={3}>
                            <Card key={plant.id} className={'product_card'}>
                                <div className={'img_trim'}>
                                <img
                                    alt="Sample" className={'product_image img-fluid'   }
                                    src={plant.plantImage}
                                />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {plant.plantName}

                                        {plant.plantPrice}
                                    </CardTitle>

                                    <CardText>
                                        {plant.plantDescription}
                                    </CardText>
                                    <SingleProductModal plant={plant}/>
                                </CardBody>

                            </Card>
                        </Col>
                    ))}

                </Row>

            </div>
        )


    }
}

export default Products;



