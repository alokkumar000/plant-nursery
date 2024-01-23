import React, {useEffect, useRef, useState} from "react";
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import seed from "../../assets/Image/seeds.jpg";
import {supabase} from "../../components/appUtill";
import LoaderSpinner from "../../components/utils/loader-spinner";
import SingleProductModal from "./single-product-modal";


function HomeSectionFour() {

    const [isLoaded, set_isLoaded] = useState(false);
    const [plants, set_plants] = useState([]);
    const [seasonalPlants, set_seasonalPlants] = useState([]);


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
                set_seasonalPlants(getSeasonalPlants());
                set_isLoaded(true);
                // Utilize the fetched data in your component
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    function getSeasonalPlants() {
        const date = new Date();
        let month = date.getMonth();
        const winterSeason = [0, 1, 2, 11, 12]
        const summerSeason = [3, 4, 5, 6, 7, 8]
        const allSeason = [9, 10]
        if (winterSeason.includes(month)) {
            return plants.filter(plant => plant.seasonType === 'winter').slice(0, 4)

        } else if (summerSeason.includes(month)) {
            return plants.filter(plant => plant.seasonType === 'summer').slice(0, 4)
        } else {
            return plants.filter(plant => plant.seasonType === 'allSeason').slice(0, 4)
        }
    }

    useEffect(() => {
        getPlants();

    }, []);

    useEffect(() => {
        const seasonalPlants = getSeasonalPlants();
        set_seasonalPlants(seasonalPlants);
    }, [plants]);


    if (!isLoaded) {
        return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    } else {


        return (
            <div>
                <Row>
                    {seasonalPlants.map((plant) => (
                        <Col md={3}>
                            <Card className={'sec_3_card mb-3'}>
                                <div className={'sec_4_cardimg_trim'}>
                                    <img
                                        alt="Sample" className={'product_image img-fluid'}
                                        src={seed}
                                    />
                                </div>
                               <SingleProductModal plant={plant}/>

                            </Card>
                        {/*=========================contact modal=================================*/}


                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

}

export default HomeSectionFour;



