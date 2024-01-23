import React, {useEffect, useRef, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {supabase} from "../../components/appUtill";


function SingleProductModal(props) {


    const [modal, setModal] = useState(false);
    const [isLoaded, set_isLoaded] = useState(false);
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');

    const toggle = () => setModal(!modal);


    function onNameChange(e) {
        console.log(e.target.value);
        setName(e.target.value)
    }

    function onMobileNoChange(e) {
        setMobileNo(e.target.value)
        console.log(e.target.value);
    }

    async function onSubmit() {

        try {
            const {data, error} = await supabase
                .from('contacts')
                .insert([{
                    name: name,
                    mobileNo: mobileNo
                }])
                .single();

            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log('sucsess');
                toggle()
                // Utilize the fetched data in your component
            }
        } catch (error) {
            console.error('Error:', error);
        }


    }

    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {


    return (
        <div>

            <Button onClick={toggle} className={'d-inline-block'}>
                Button
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Buy {props.plant.plantName}</ModalHeader>
                <ModalBody>
                    Call us at 1-800-PLANTS-4-U to order {props.plant.plantName} today!
                    <div>Or</div>
                    <div>Fill out the form below to request a call back</div>
                    <div>Our team will reach out to you within 24 hours</div>
                    <div className={'mt-3'}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter name" onChange={onNameChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"
                                       placeholder="Enter phone number" onChange={onMobileNoChange}/>
                            </div>

                            {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                        </form>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmit}>
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



