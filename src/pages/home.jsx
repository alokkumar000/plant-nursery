import React, {useEffect, useRef, useState} from "react";
import {Col, Row} from "reactstrap";
import LoaderSpinner from "../components/utils/loader-spinner";
import _ from "lodash";
import {supabase} from "../components/appUtill";



function Home() {

    const [isLoaded, set_isLoaded] = useState(false);
    const [plants, set_plants] = useState([]);


    useEffect(() => {
        getPlants();

    }, []);

    const getPlants = async () => {
        try {
            const { data, error } = await supabase
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



    console.log(plants);



    if (!isLoaded) {
        return <div style={{marginTop: '5%'}}>
            <LoaderSpinner/>
        </div>
    } else {


        return (
            <div>
                <h1>Home</h1>
                {!_.isEmpty(plants) && plants.map((plant) => (

                    <Row key={plant.id}>
                        <Col>Name:{plant.plantName}</Col>
                        <Col>description:{plant.plantDescription}</Col>
                        <Col>{plant.plantPrice}</Col>
                        <Col>{plant.plantType}</Col>
                    </Row>
                ))
                }

            </div>
        )

    }
}

export default Home;



