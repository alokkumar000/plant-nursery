import React, {useEffect, useRef, useState} from "react";
import {Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import LoaderSpinner from "../components/utils/loader-spinner";
import _ from "lodash";
import {supabase} from "../components/appUtill";
import HomeCarousel from "../views/partials/home-carousel";
import SingleProductModal from "../views/partials/single-product-modal";
import HomeSectionThree from "../views/partials/home-sec-3";
import HomeSectionFour from "../views/partials/home-sec-4";


function Home() {

    const [isLoaded, set_isLoaded] = useState(false);
    const [plants, set_plants] = useState([]);


    useEffect(() => {
        getPlants();

    }, []);

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
                <HomeCarousel/>


                <div className={'container my-5 text-center sec_2'}>

                        <h1>
                            <div> We make products that help you</div>
                            <div>
                                upgrade your gardening experience.
                            </div>
                        </h1>

                </div>

                <div className={'container sec_3 my-5'}>
                    <HomeSectionThree/>
                </div>

                <div className={'container my-5 sec_4'}>
                   <div className={'sec_4_header mb-3'}>New Arrivals</div>
                    <HomeSectionFour/>
                </div>
            </div>
        )

    }
}

export default Home;



