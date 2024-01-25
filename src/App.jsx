import {BrowserRouter, Route, Routes} from "react-router-dom";


import Fulllayout from "./layouts/fulllayout";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Fulllayout/>

        </BrowserRouter>

    );
}

export default App;
