
import React, {useEffect, useRef, useState} from "react";
import {ColorRing} from "react-loader-spinner";



function LoaderSpinner() {

    const [isLoaded, set_isLoaded] = useState(false);



    return (
        <div>
            <ColorRing
                visible={true}
                height="60"
                width="60"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )



}

export default LoaderSpinner;



