import React, {useEffect, useRef, useState} from "react";
import {Button, CardBody, CardTitle, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {supabase} from "../../components/appUtill";
import callus from "../../assets/Image/callus.jpg";
import _ from "lodash";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {isMobile} from "react-device-detect";

function SingleProductModal(props) {


    const [modal, setModal] = useState(false);
    const [isLoaded, set_isLoaded] = useState(false);
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [isDisabled, set_isDisabled] = useState(false);


    function toggle() {
        setModal(!modal);

        setMobileNo('');
        setName('');
    }


    function onNameChange(e) {
        // console.log(e.target.value);
        setName(e.target.value)
    }

    function disableButton() {
        return !_.isEmpty(name) && !_.isEmpty(mobileNo);
    }

    console.log('isDisabled', !_.isEmpty(name) && !_.isEmpty(mobileNo));

    function onMobileNoChange(e) {

        setMobileNo(e.target.value)
        // console.log(e.target.value);
    }

    function submitWithValidation() {
        const mobregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (mobregex.test(mobileNo)) {
            // return true;
            console.log('true')
            onSubmit()
        } else {
            // return false;
            console.log('false')
            toast.error('Please enter valid mobile ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    async function onSubmit() {

        set_isLoaded(true);

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
                toast.success('Message sent successfully ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                // console.log('sucsess');
                toggle()
                set_isLoaded(false);
                // Utilize the fetched data in your component
            }
        } catch (error) {
            // console.error('Error:', error);
            set_isLoaded(false);
        }


    }

    // if (!isLoaded) {
    //     return <div style={{marginTop: '15%'}}><LoaderSpinner/></div>
    // } else {


    return (
        <>

            <CardBody className={'sec_3_cardbody '} onClick={toggle}>

                <CardTitle className={' px-1 '}>
                    <Row>
                        <Col md={10}>
                            <div>
                                <span className={'fs-5 text_ellipsis '}
                                      title={props.plant.name}>{props.plant.name}</span>

                            </div>
                            <div><small>Price : &#8377;{props.plant.price}</small></div>
                        </Col>
                        <Col md={2}>
                            <div className={isMobile ? '' : 'text-end mt-2'}><i className="fa fa-cart-shopping"></i>
                            </div>
                        </Col>


                    </Row>


                </CardTitle>

            </CardBody>


            <Modal isOpen={modal} toggle={toggle} size={'lg'}>
                <ModalBody className={'p-5'}>
                    <div className={'fw-bold fs-4 mb-3'}>Buy <span className={'text_green'}>{props.plant.name}</span>
                    </div>
                    <div> Call us at <span className={'fw-bold text_green'}>1-800-PLANTS-4-U</span> to
                        order {props.plant.name} today!
                    </div>
                    <div className={'text-center1 fw-bold font-bold fs-3 my-3'}>Or</div>
                    <Row>
                        <Col md={8}>
                            <div>Fill out the form below to request a call back.</div>
                            <div>Our team will reach out to you within 24 hours.</div>
                            <div className={'mt-3'}>
                                <form>
                                    <div className="form-group">
                                        <Row>
                                            <Col md={3}> <label htmlFor="exampleInputEmail1">Name</label></Col>
                                            <Col md={9}>
                                                <input type="text" className="form-control " id="exampleInputEmail1"
                                                       aria-describedby="emailHelp" placeholder="Enter name"
                                                       onChange={onNameChange}/>
                                            </Col>
                                        </Row>


                                    </div>
                                    <div className="form-group mt-2">
                                        <Row>
                                            <Col md={3}> <label htmlFor="exampleInputPassword1">Phone No</label></Col>
                                            <Col md={9}>
                                                <input type="tel" id="phone" name="phone"
                                                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                       required className="form-control" id="exampleInputPassword1"
                                                       placeholder="Enter phone number" onChange={onMobileNoChange}/>
                                            </Col>
                                        </Row>


                                    </div>

                                </form>
                            </div>
                        </Col>
                        <Col md={4}>
                            <img
                                alt="Sample" className={isMobile ? 'd-none' : 'product_image img-fluid'}
                                src={callus}
                            />
                        </Col>
                    </Row>

                    <div className={isMobile ? 'text-center mt-4' : 'mt-4 text-end'}>
                        <Button color="secondary" outline onClick={toggle}>
                            Cancel
                        </Button>{' '}

                        {!isLoaded ? (
                            <Button color="success" onClick={submitWithValidation}
                                    disabled={_.isEmpty(name) || _.isEmpty(mobileNo)}>
                                Submit
                            </Button>

                        ) : (
                            <Button color="success">
                                <div className="spinner-border text-light text-center spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                {' '} Loading...
                            </Button>
                        )}

                    </div>
                </ModalBody>

            </Modal>

        </>
    )


}

export default SingleProductModal;



