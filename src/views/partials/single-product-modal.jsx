
import React, {useEffect, useRef, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";



function SingleProductModal(props) {


    const [modal, setModal] = useState(false);
    const [isLoaded, set_isLoaded] = useState(false);



    const toggle = () => setModal(!modal);









    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {




    return (
        <div>

            <Button onClick={toggle} className={'d-inline-block'}>
                Button
            </Button>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Buy {props.plant.plantName}</ModalHeader>
                <ModalBody>
                   Call us at 1-800-PLANTS-4-U to order {props.plant.plantName} today!
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    )



}

export default SingleProductModal;



