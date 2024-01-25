import React, {useState} from "react";
import SeasonalPlants from "./seasonal-plants";
import LivePlants from "./live-plants";
import Tools from "./tools";
import Seeds from "./seeds";

function Products() {



    return (
        <div className={'container py-4'}>

            <LivePlants/>
            <Seeds/>
            <SeasonalPlants/>

            <Tools/>


        </div>
    )


}

export default Products;



